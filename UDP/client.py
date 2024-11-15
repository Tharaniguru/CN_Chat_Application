from socket import *

serverName = "127.0.0.1"   # loopback address
serverPort = 12000
clientSocket = socket(AF_INET, SOCK_DGRAM)

while True:
    message = input("Send a message: ")
    if message.lower() == 'exit':
        print("Closing connection...")
        break
    clientSocket.sendto(message.encode(), (serverName, serverPort))
    
    modifiedMessage, serverAddress = clientSocket.recvfrom(1024)
    print("From Server:", modifiedMessage.decode())

clientSocket.close()
