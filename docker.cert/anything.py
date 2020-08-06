import requests
import json

GetReposURL = "https://api.github.com/users/api/repos"

listReposResponse = requests.request("GET", url = GetReposURL)

print(listReposResponse.json())
