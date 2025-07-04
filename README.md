# 🧩 Microservices Architecture Study

## 🛠 Tech Stack

| Category              | Technology                        |
|-----------------------|-----------------------------------|
| Runtime               | Node.js                           |
| Framework             | Express.js                        |
| API Gateway / Proxy   | Nginx, HAProxy, Express.js        |
| Database              | PostgreSQL                        |
| Cache                 | Redis, Varnish                    |
| DevOps / CI/CD        | Docker, Jenkins, GitHub           |

## 📁 Project Structure

```
node-microservice-study/
├── api-gateway/
│ ├── node_modules/
│ ├── src/
│ │ ├── app.js
│ │ └── server.js
│ ├── .env
│ ├── package.json
│ └── package-lock.json
├── auth-service/
│ ├── node_modules/
│ ├── package.json
│ └── package-lock.json
├── postgres/
│ ├── secrets/
│ │ └── postgres_password.txt
│ └── postgres-stack.yml
├── .gitignore
└── README.md
```
