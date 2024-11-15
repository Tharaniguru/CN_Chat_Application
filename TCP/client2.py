from socket import *
serverName = "127.0.0.1"   #loop back address
serverPort = 12000
clientSocket = socket(AF_INET, SOCK_STREAM)
clientSocket.connect((serverName,serverPort))
while True:
    sentence = input("Send a message:")
    if sentence.lower() == 'exit':
        print("Closing connection...")
        break
    clientSocket.send(sentence.encode())
    modifiedSentence = clientSocket.recv(1024)
    print("From Server:", modifiedSentence.decode())
clientSocket.close()
