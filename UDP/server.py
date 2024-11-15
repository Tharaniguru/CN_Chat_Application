from socket import *

serverPort = 12000
serverSocket = socket(AF_INET, SOCK_DGRAM)
serverSocket.bind(("", serverPort))

print("The UDP server is ready to receive")

while True:
    message, clientAddress = serverSocket.recvfrom(1024)
    print(f"Received from {clientAddress}: {message.decode()}")
    
    reply = input("Reply to the message: ")
    serverSocket.sendto(reply.encode(), clientAddress)
