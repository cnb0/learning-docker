import { nanoid } from 'nanoid';
import RedisService from '../../services/redis.service';
import PrometheusService from '../../services/prometheus.service';
import l from '../../../common/logger';
import tracer from '../../../common/jaeger';
const opentracing = require('opentracing');

export class Controller {
  async isReady(req, res) {
    try {
      var redis = await RedisService.ping();
      l.debug({ msg: 'isReady: Redis PING complete', value: redis });
      return res.json({
        msg: 'ready',
      });
    } catch (err) {
      l.warn({ msg: 'Redis PING errored', error: err.stack });
      return res.status(503).json({
        status: 503,
        msg: 'Service Unavailable',
      });
    }
  }

  async getGame(req, res) {
    const id = `${req.params.id}`;
    try {
      var redis = await RedisService.get(id);
      l.debug({ msg: 'Redis GET complete', key: id, value: redis });
      return res.json({
        id: req.params.id,
        started_on: redis,
      });
    } catch (err) {
      l.warn({
        msg: 'Redis GET errored',
        key: req.params.id,
        error: err.stack,
      });
      return res.status(404).json({
        status: 404,
        msg: 'Not Found',
      });
    }
  }

  async createGame(req, res) {
    try {
      const id = nanoid();
      const started_on = new Date().getTime();
      var redis = await RedisService.set(id, started_on);
      l.info({ msg: 'Game created in Redis', key: id, value: redis });
      return res.status(201).json({
        id: id,
        started_on: started_on,
      });
    } catch (err) {
      l.warn({ msg: 'createGame Redis SET errored', error: err.stack });
      return res.status(500).json({
        status: 500,
        msg: 'Server Error',
      });
    }
  }

  async getGameItem(req, res) {
    try {
      const key = `${req.params.id}/${req.params.element}`;
      var redis = await RedisService.get(key);
      l.debug({ msg: 'Game item Redis GET complete', key: key, value: redis });
      return res.json({
        id: req.params.id,
        element: req.params.element,
        value: redis,
      });
    } catch (err) {
      l.warn({
        msg: 'getGameItem Redis GET errored',
        id: req.params.id,
        element: req.params.element,
        error: err.stack,
      });
      return res.status(404).json({
        status: 404,
        msg: 'Not Found',
      });
    }
  }

  async setGameItem(req, res) {
    try {
      const key = `${req.body.id}/${req.body.element}`;
      var redis = await RedisService.set(key, req.body.value);
      l.info({ msg: 'Game item Redis SET complete', key: key, value: redis });
      return res.status(201).json({
        id: req.body.id,
        element: req.body.element,
        value: req.body.value,
      });
    } catch (err) {
      l.warn({
        msg: 'setGameItem Redis SET errored',
        key: req.body.id,
        error: err.stack,
      });
      return res.status(500).json({
        status: 500,
        msg: 'Server Error',
      });
    }
  }

  async incrementGameItem(req, res) {
    const key = `${req.body.id}/${req.body.element}`;
    const value = req.body.value;
    const span = tracer.startSpan('redis', {
      childOf: req.span,
      tags: {
        [opentracing.Tags.SPAN_KIND]: opentracing.Tags.SPAN_KIND_RPC_CLIENT,
        'span.kind': 'client',
        'db.type': 'redis',
        'db.statement': `INCRBY ${key} ${value}`,
      },
    });
    try {
      var redis = await RedisService.incrby(key, value);
      span.log({ result: redis }).finish();
      const msg = {
        msg: 'Game item Redis INCRBY complete',
        key: key,
        value: redis,
      };
      req.span.log(msg);
      l.info(msg);
      if (req.body.element === 'deploys') {
        const incr = parseInt(req.body.value, 10);
        PrometheusService.deploymentCounter.inc(incr);
      }
      return res.json({
        id: req.params.id,
        element: req.params.element,
        value: redis,
      });
    } catch (err) {
      const msg = {
        key: req.body.id,
        element: req.body.element,
        message: err.message,
        stack: err.stack,
      };
      span.log(msg).finish();
      l.warn(msg);
      return res.status(404).json({
        status: 404,
        msg: 'Not Found',
      });
    }
  }
}
export default new Controller();
