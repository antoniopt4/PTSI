import requests
from bs4 import BeautifulSoup
import sys
import webbrowser
import re
from scholarly import scholarly, ProxyGenerator
from fp.fp import FreeProxy


# Getting free Proxy
#proxy = FreeProxy().get()
pg = ProxyGenerator()
pg.FreeProxies()
scholarly.use_proxy(pg)

# Input do tópico de interesse
#print("Welcome! Insert a topic of your interest: ")
#topic = input()


# Hipótese 1 - Autores com interesse igual ao do tópico procurado e as suas publicaçõe:

search_interests = scholarly.search_keyword(topic)
interesse = scholarly.fill(next(search_interests))
json_author1 = interesse['scholar_id']
print("Author_ID: ", json_author1)
author = scholarly.search_author_id(json_author1)
print("Autores com interesse nesta área:")
scholarly.pprint(author)

# Hipótese 2 - Autores com publicações sobre este tópico:
#search_pub = scholarly.search_pubs(topic)
# scholarly.pprint(next(search_pub))
#publications = scholarly.fill(next(search_pub))
# print("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW")
# print(publications)
#json_author2 = publications['author_id']
#auth = json_author2[1]
#print("Author_ID: ", json_author2)
#author2 = scholarly.search_author_id(auth)
#print("Autores com publicações nesta área:")
# scholarly.pprint(author2)


# Informações sobre um autor a escolher
print("Insira o ID do Autor que pretenda ter mais informações:")
id = input()
testa = scholarly.search_author_id(id)
scholarly.pprint(scholarly.fill(testa, sections=['publications']))


# Imprime se a info do publicador e gaurda se o seu nome e email domain
scholarly.pprint(testa)
name = testa['name']
dominio = testa['email_domain']

# Faz-se a pesquisa no Google com os parâmetros anteriores
print("SCRAPPING BEGINS")
a = name + '' + dominio
payload = {'q': a}
#a.format('"', a, '"')
print(payload)
#payload = {'q': 'Filipe Portela @dsi.uminho.pt'}
r = requests.get(
    'https://google.com/search?',  params=payload)

print(r.url)
print(r.status_code)
# print(r.text)
# print(r.headers)


# Converter a response em Text e guardar numa lista todos os emails existentes
a = r.text
print(a)
#emails = re.findall(r"[a-z0-9\.\-+_]+@[a-z0-9\.\-+_]+\.[a-z]+", a)
emails = re.findall(r'[\w\.-]+@[\w\.-]+', a)

print(emails)
print(type(emails))


# Percorrer a lsita de emails e devolve email mais frequente
def most_frequent(emails):
    counter = 0
    num = emails[0]

    for i in emails:
        curr_frequency = emails.count(i)
        if(curr_frequency > counter):
            counter = curr_frequency
            num = i

    return num
# visual studio test


print("Email do Researcher:", most_frequent(emails))
