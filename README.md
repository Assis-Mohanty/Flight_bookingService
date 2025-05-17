
---
Flight Booking Service

This microservice manages all **flight booking operations** — including creating, retrieving, and canceling bookings. It is an essential part of a **microservice-based flight reservation system**.

**Repository:** [Flight Booking Service](https://github.com/Assis-Mohanty/Flight_bookingService)

---

## 🧩 Microservices Overview

This system is composed of five independent services:

| Service                      | Role                                                   | Repository                                                                |
| ---------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| 🔍 **Flight Search Service** | Manages flight data and search queries                 | [FandS](https://github.com/Assis-Mohanty/FandS)                           |
| 🛒 **Booking Service**       | Handles flight bookings and cancellations              | **You are here**                                                          |
| ⏰ **Reminder Service**       | Sends notifications/reminders for upcoming flights     | [FremainderServiceS](https://github.com/Assis-Mohanty/FremainderServiceS) |
| 🔐 **Auth Service**          | Authenticates and authorizes users                     | [FauthS](https://github.com/Assis-Mohanty/FauthS)                         |
| 🌐 **API Gateway**           | Routes all client requests to the appropriate services | [ApiGateway](https://github.com/Assis-Mohanty/ApiGateway)                 |

---

## 🧠 Responsibilities

* 🔒 Verifies user authentication (via Auth Service)
* ✈️ Validates selected flights (via Flight Service)
* 📅 Creates booking records
* ❌ Handles cancellations
* 📩 Communicates with Reminder Service via RabbitMQ for post-booking notifications

---

## ⚙️ Tech Stack

* **Node.js + Express**: Backend framework
* **MySQL + Sequelize**: Database and ORM
* **RabbitMQ (via `amqplib`)**: Messaging between services
* **Axios**: HTTP client for internal service calls
* **Morgan**: Logging
* **dotenv**: Environment management

---

## 🗃️ Folder Structure

```
Flight_bookingService/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── index.js
├── config/
│   └── config.json
├── .env
└── package.json
```

---

## 🚀 How to Run

```bash
git clone https://github.com/Assis-Mohanty/Flight_bookingService
cd Flight_bookingService
npm install
cp .env.example .env  # Add DB, MQ, and service endpoint configs
npm start
```

---

## 🔐 Environment Variables

Example `.env`:

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=booking_service
AUTH_SERVICE_URL=http://localhost:3001
FLIGHT_SERVICE_URL=http://localhost:3002
RABBITMQ_URL=amqp://localhost
```

---

## 🔄 Integration Flow

1. **Client** sends a booking request → **API Gateway**
2. Gateway forwards to **Booking Service**
3. Booking Service:

   * Verifies user via **Auth Service**
   * Validates flight ID via **Flight Service**
   * Creates booking record
   * Sends message to **Reminder Service** for notification

---

## 🧪 Future Improvements

* Add retry queue mechanism for RabbitMQ
* Implement transaction rollback on external service failure
* Add rate-limiting and booking quota enforcement
* Centralized error logging

---

## 🧑‍💻 Author

Maintained by [Assis Mohanty](https://github.com/Assis-Mohanty)

---
