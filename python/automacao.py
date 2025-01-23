import pyautogui as pa
from time import sleep
from urllib.parse import quote
import webbrowser

pa.press('win')
pa.write('chrome')
pa.press("ENTER")
sleep(1)
pa.write('web.whatsapp.com')
pa.press('ENTER')

arquivo = open('texto/mensagem.txt', 'r')
content = arquivo.read()
print(content)

# with open('texto/mensagem.txt', 'r') as arquivo:
#     arquivo.read()
#     print(arquivo)

#alocar o conteúdo do arquivo txt do puppeteer em uma variável mensagem

#conferir como é o link personalizado para grupos
# link_mensagem = f'https://web.whatsapp.com/send?(...)&text={quote(mensagem)}'
# webbrowser.open(link_mensagem)
# sleep(10)
# # tirar o screenshot da seta
# enviar = pa.locateCenterOnScreen('seta.png')
# sleep(5)
# pa.click(enviar[0], enviar[1])
# sleep(5)