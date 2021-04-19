import requests
from bs4 import BeautifulSoup
import numpy as np
import sys
import webbrowser
import re
from scholarly import scholarly, ProxyGenerator
from fp.fp import FreeProxy


# Getting free Proxy
pg = ProxyGenerator()
pg.FreeProxies()
scholarly.use_proxy(pg)

search = input("Insert topic:")
payload = {'view_op': 'search_authors',
           'mauthors': 'label:' + search}
r = requests.get(
    'https://scholar.google.com/citations?',  params=payload)


html_content = r.text
soup = BeautifulSoup(html_content, "html.parser")
# print(soup.prettify())


print("----------------------------")
print(soup.title.text)
print("----------------------------")


profile_name = soup.select('.gs_ai_name a')
# print(profile_name)
profile_picture = soup.select('.gs_ai_pho span')
# print(profile_picture)

names = []
pictures = []
ids = []
idsF = []

for link in profile_picture[:10]:
    # print(link.img.get('src'))
    pictures.append(link.img.get('src'))


for link in profile_name[:10]:
    # print(link.get('href').split('='))
    # ids.append(link.get('href'))
    ids.append(link.get('href').split('='))
    # print(link.text)
    names.append(link.text)

# Juntar as listas para juntar os nomes as imagens


def countList(names, pictures):
    return np.array([[i, j] for i, j in zip(names, pictures)]).ravel()


print(countList(names, pictures))


# Adicionar a lista final de ids apenas os ids
for id in ids:
    idsF.append(id[2])

print(idsF)
print("URL:")
print(r.url)


# PARA CORRER QUANDO SE CLICAR NO PERFIL
# for id in idsF:
#     author = scholarly.search_author_id(id)
#     scholarly.pprint(author)

# scholarly.pprint(author)
# name = testa['name']
# dominio = testa['email_domain']
# # Faz-se a pesquisa no Google com os parâmetros anteriores
# print("SCRAPPING BEGINS")
# a = name + '' + dominio
# payload = {'q': a}
# print(payload)
# r = requests.get(
#     'https://google.com/search?',  params=payload)

# print(r.url)
# print(r.status_code)


# # Converter a response em Text e guardar numa lista todos os emails existentes
# a = r.text
# print(a)
# emails = re.findall(r'[\w\.-]+@[\w\.-]+', a)

# print(emails)
# print(type(emails))


# # Percorrer a lsita de emails e devolve email mais frequente
# def most_frequent(emails):
#     counter = 0
#     num = emails[0]

#     for i in emails:
#         curr_frequency = emails.count(i)
#         if(curr_frequency > counter):
#             counter = curr_frequency
#             num = i

#     return num


# print("Email do Researcher:", most_frequent(emails))

