# 📄 Event Logger in Node.js

This is a simple **event-based logging system** using Node.js. It logs messages to a file (`eventlog.txt`) and displays memory usage at regular intervals.

---

## 📌 Features  
✅ Uses **Node.js events** to handle logging.  
✅ Logs messages to a file (`eventlog.txt`).  
✅ Displays **real-time memory usage** every 3 seconds.  

---

## 🚀 How to Run  
node logger.js
A text file eventlog.txt will be generated and the logs will be displayed in it.

## 🛠️ How It Works  

- The script **creates an event emitter** to log messages.  
- The `logToFile` function **writes logs to `eventlog.txt`**.  
- The script logs **"Application Started"** and memory usage **every 3 seconds**.  
- Data is continuously appended to the log file.  

## Expected output

2025-02-07T11:19:02.675Z - Application Started
2025-02-07T11:19:02.676Z - Application event occurred
2025-02-07T11:19:05.682Z - Current Memory Usage: 30.85
2025-02-07T11:19:08.691Z - Current Memory Usage: 30.96
2025-02-07T11:19:11.702Z - Current Memory Usage: 31.05

