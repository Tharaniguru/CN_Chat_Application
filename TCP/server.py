from socket import *
from threading import Thread

# Function to handle client communication
def handle_client(connectionSocket, addr):
    print(f"Connected to client: {addr}")
    while True:
        sentence = connectionSocket.recv(1024).decode()
        if not sentence: 
            break  # Exit loop if no message is received
        print(f"Received from {addr}: {sentence}")
        replay = input("Reply to the message: ")
        connectionSocket.send(replay.encode())
    connectionSocket.close()
    print(f"Connection closed with client: {addr}")

# Main server code2
serverPort = 12000
serverSocket = socket(AF_INET, SOCK_STREAM)
serverSocket.bind(("", serverPort))
serverSocket.listen(5)  # Allow up to 5 clients to wait for connection
print("The server is ready to receive")

while True:
    # Accept new client connection
    connectionSocket, addr = serverSocket.accept()
    
    # Create a new thread to handle this client
    client_thread = Thread(target=handle_client, args=(connectionSocket, addr))
    client_thread.start()
  