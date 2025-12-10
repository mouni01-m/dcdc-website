// data/projects.ts

export type Year = "1st" | "2nd" | "3rd" | "4th";
export type Domain =
  | "IoT"
  | "Embedded"
  | "AI/ML"
  | "Robotics"
  | "Communication"
  | "Automation"
  | "Web"
  | "Cybersecurity"
  | "Blockchain"
  | "AR/VR"
  | "Cloud & DevOps"
  | "DevOps"
  | "Quantum Computing"
  | "Computer Vision"
  | "Other";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  year: Year;
  domain: Domain;
  difficulty: Difficulty;
  tags: string[];

  problemStatement: string;
  abstract: string;
  components: string[];
  blockDiagram: string[];
  blockDiagramDot: string; // Graphviz DOT
  working: string;
  applications: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Smart Energy Monitor using IoT",
    shortDescription:
      "Monitors household power usage in real time, logs data to cloud and alerts users during over-consumption.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["NodeMCU", "Current Sensor", "Blynk", "Web Dashboard"],
    problemStatement:
      "Conventional energy meters only give monthly readings and do not help users understand when and where electricity is being wasted.",
    abstract:
      "This project implements an IoT based smart energy monitoring system for homes or small offices. Current and voltage sensors measure the electrical parameters of the load. A NodeMCU or ESP controller sends the data to a cloud or mobile dashboard. Users can view real time power and energy trends and receive notifications when usage exceeds a threshold.",
    components: [
      "NodeMCU ESP8266 or ESP32",
      "Current sensor (ACS712 or similar)",
      "Voltage sensing circuit",
      "Wi-Fi router with internet access",
      "IoT dashboard platform (Blynk, MQTT, custom web)",
      "AC loads for testing",
      "5V power supply or USB adapter"
    ],
    blockDiagram: [
      "AC Supply & Load",
      "Current / Voltage Sensors",
      "NodeMCU / ESP Controller",
      "Cloud Server / IoT Platform",
      "Mobile App / Web Dashboard"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "AC Supply & Load" -> "Current / Voltage Sensors" -> "NodeMCU / ESP Controller" ->
  "Cloud Server / IoT Platform" -> "Mobile App / Web Dashboard";
}
`,
    working:
      "Sensors measure current and voltage of the connected load. The controller reads the sensor values using its ADC, calculates power and energy, and sends readings to the cloud over Wi-Fi. The dashboard plots graphs and shows total energy consumption. When the calculated power or daily energy crosses a threshold, the system triggers notifications to the user.",
    applications: [
      "Smart metering in homes and hostels",
      "Energy auditing in labs and offices",
      "Monitoring of critical loads",
      "Educational demo for IoT and power monitoring"
    ]
  },
  {
    id: 2,
    title: "Smart Irrigation System with Soil Moisture Sensing",
    shortDescription:
      "Automatically controls water pump based on soil moisture and schedules, with mobile app monitoring.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["Soil Sensor", "Relay", "ESP8266", "Mobile App"],
    problemStatement:
      "Manual irrigation or fixed timing based irrigation does not consider actual soil moisture, which leads to over irrigation or under irrigation and wastage of water.",
    abstract:
      "The smart irrigation system uses soil moisture sensors and a microcontroller with Wi-Fi to control a water pump automatically. The controller decides when to turn the pump on or off based on moisture levels and user defined thresholds. Moisture readings and pump status are visible on a mobile app or web dashboard.",
    components: [
      "NodeMCU ESP8266 / ESP32 or Arduino with Wi-Fi module",
      "Soil moisture sensors",
      "Relay module to drive pump",
      "Water pump and water tank",
      "Power supply unit",
      "IoT platform or custom mobile app",
      "Jumper wires and PCB"
    ],
    blockDiagram: [
      "Soil Moisture Sensors",
      "Microcontroller (ESP / Arduino)",
      "Relay Driver",
      "Water Pump",
      "Wi-Fi Module",
      "Cloud / Mobile App"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Soil Moisture Sensors" -> "Microcontroller (ESP / Arduino)";
  "Microcontroller (ESP / Arduino)" -> "Relay Driver" -> "Water Pump";
  "Microcontroller (ESP / Arduino)" -> "Wi-Fi Module" -> "Cloud / Mobile App";
}
`,
    working:
      "The microcontroller periodically reads soil moisture values from the sensors. When the value falls below a dry threshold for a certain time, it turns on the pump through the relay. When the moisture reaches the wet threshold, it turns the pump off. Moisture readings and pump events are sent to the cloud, where the user can also force manual control or adjust thresholds.",
    applications: [
      "Small farms and kitchen gardens",
      "Greenhouses and nurseries",
      "Lawn and landscape irrigation",
      "Training project on smart farming"
    ]
  },
  {
    id: 3,
    title: "Home Automation with Voice Control",
    shortDescription:
      "Controls lights and appliances using mobile app and basic voice commands through a Wi-Fi enabled controller.",
    year: "2nd",
    domain: "Automation",
    difficulty: "Easy",
    tags: ["ESP32", "Relays", "Google Assistant", "MQTT"],
    problemStatement:
      "Traditional switches require physical access and are not convenient for elderly or physically challenged users. There is no simple way to monitor and control appliances remotely.",
    abstract:
      "This project implements a basic home automation system in which an ESP32 or similar Wi-Fi controller is connected to relay modules that switch AC loads. The controller communicates with a cloud server or MQTT broker. Users can control appliances through a mobile app or voice assistants like Google Assistant or Alexa.",
    components: [
      "ESP32 or NodeMCU ESP8266 board",
      "Relay module for AC loads",
      "Lamps, fans or sockets as loads",
      "Mobile app or web interface",
      "MQTT broker or HTTP server",
      "Smartphone with voice assistant",
      "Power supply and wiring accessories"
    ],
    blockDiagram: [
      "User (Mobile App / Voice Command)",
      "Cloud Server / MQTT Broker",
      "ESP32 / Wi-Fi Controller",
      "Relay Module",
      "Home Appliances"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "User (Mobile App / Voice Command)" -> "Cloud Server / MQTT Broker" ->
  "ESP32 / Wi-Fi Controller" -> "Relay Module" -> "Home Appliances";
}
`,
    working:
      "User commands reach the cloud server or MQTT broker from the mobile app or voice assistant service. The ESP32 maintains a persistent connection to the server and subscribes to control topics. When a message is received, the relevant GPIO is toggled to switch the relay and appliance. The controller can also publish status of each load back to the app.",
    applications: [
      "Smart home and hostel rooms",
      "Assisted living for elderly or disabled users",
      "Energy efficient lighting control",
      "Entry level IoT and automation demo"
    ]
  },
  {
    id: 4,
    title: "Vehicle Accident Detection and Location Alert",
    shortDescription:
      "Detects accidents using impact sensors and sends SMS with GPS coordinates to emergency contacts.",
    year: "4th",
    domain: "Embedded",
    difficulty: "Hard",
    tags: ["GSM", "GPS", "Accelerometer", "Safety"],
    problemStatement:
      "In many road accidents there is a long delay before help arrives because there is no automatic system to detect the accident and send accurate location details.",
    abstract:
      "The vehicle accident detection system uses an accelerometer or vibration sensor to detect a sudden impact. A microcontroller checks the signal and, if a crash is detected, obtains GPS coordinates and sends SMS alerts to emergency contacts using a GSM module. A buzzer and cancel button allow the driver to abort false alarms.",
    components: [
      "Microcontroller (Arduino or similar)",
      "Accelerometer or vibration sensor",
      "GPS module",
      "GSM module with SIM card",
      "Buzzer and status LEDs",
      "Push button for reset or cancel",
      "Power supply from vehicle battery"
    ],
    blockDiagram: [
      "Accelerometer / Impact Sensor",
      "Microcontroller",
      "GPS Module",
      "GSM Module",
      "Emergency Contacts",
      "Buzzer / Indicator"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Accelerometer / Impact Sensor" -> "Microcontroller";
  "GPS Module" -> "Microcontroller";
  "Microcontroller" -> "GSM Module" -> "Emergency Contacts (SMS)";
  "Microcontroller" -> "Buzzer / Indicator";
}
`,
    working:
      "During normal motion the accelerometer readings stay below a limit. The microcontroller samples the sensor values and when acceleration exceeds a crash threshold it assumes an accident. It reads the current GPS coordinates and waits a few seconds for the cancel button. If not cancelled, it formats a text message with location and sends it via GSM to stored phone numbers.",
    applications: [
      "Cars, bikes and college buses",
      "Fleet vehicles and trucks",
      "Student transport monitoring",
      "Research on intelligent transport systems"
    ]
  },
  {
    id: 5,
    title: "Air Quality Monitoring with Cloud Dashboard",
    shortDescription:
      "Measures air quality and environmental parameters and visualizes trends on an online dashboard.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["Gas Sensor", "DHT11", "ThingSpeak", "ESP8266"],
    problemStatement:
      "Poor air quality affects health but citizens usually do not have access to low cost real time data for their local environment.",
    abstract:
      "This project builds an IoT based air quality node that measures gas concentration and optionally dust, temperature and humidity. An ESP8266 or ESP32 sends the data to a cloud IoT platform where users can view graphs and trends. Alerts can be generated if pollution exceeds safe limits.",
    components: [
      "ESP8266 or ESP32 board",
      "Gas sensor (MQ135 or similar)",
      "Optional dust sensor (GP2Y1010 etc.)",
      "DHT11 or DHT22 sensor",
      "Resistors and conditioning circuits",
      "Wi-Fi router",
      "Cloud IoT platform account",
      "Enclosure if installed outdoors"
    ],
    blockDiagram: [
      "Air Quality & Environmental Sensors",
      "ESP8266 / ESP32 Node",
      "Cloud Server / IoT Platform",
      "Web / Mobile Dashboard"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Gas / Dust / Temp Sensors" -> "ESP8266 / ESP32 Node" ->
  "Cloud Server / IoT Platform" -> "Web / Mobile Dashboard";
}
`,
    working:
      "Sensors measure gas concentration, particulate matter and temperature or humidity. The controller reads the sensor values at intervals, formats them and sends them to the cloud using HTTP or MQTT. The server stores data and generates graphs. Threshold comparisons generate warnings or notifications when air quality is poor.",
    applications: [
      "Indoor air quality monitoring",
      "Pollution monitoring near roads or industry",
      "Campus environmental station",
      "Awareness projects on climate and health"
    ]
  },
  {
    id: 6,
    title: "Sign Language to Speech Converter",
    shortDescription:
      "Uses camera and deep learning to recognize hand gestures and convert them into audible speech.",
    year: "4th",
    domain: "AI/ML",
    difficulty: "Hard",
    tags: ["Python", "OpenCV", "CNN", "Assistive Tech"],
    problemStatement:
      "People with hearing and speech impairment mainly communicate using sign language, which is not understood by most of the general population.",
    abstract:
      "The sign language to speech converter captures hand gestures using a camera and recognizes them using a trained convolutional neural network. The predicted character or word is shown on screen and converted to audible speech using a text to speech engine. This helps sign language users to communicate with non signers.",
    components: [
      "Laptop or Raspberry Pi with camera",
      "USB or built in webcam",
      "Python with OpenCV",
      "Deep learning library (TensorFlow or PyTorch)",
      "Text to speech engine such as pyttsx3 or gTTS",
      "Dataset of sign language gestures",
      "Speakers or headphones"
    ],
    blockDiagram: [
      "User Hand Gesture",
      "Camera Capture",
      "Image Pre-processing (OpenCV)",
      "CNN-based Gesture Recognition",
      "Predicted Text",
      "Text-to-Speech Engine",
      "Audio Output"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "User Hand Gesture" -> "Camera Capture" -> "Image Pre-processing (OpenCV)" ->
  "CNN-based Gesture Recognition" -> "Predicted Text" ->
  "Text-to-Speech Engine" -> "Audio Output";
}
`,
    working:
      "A dataset of labeled gesture images is used to train the CNN model. In real time, frames from the camera are pre processed to extract the region of interest, resized and normalized. The model predicts the gesture class, which is mapped to a letter or word and displayed on screen. The text is passed to a text to speech engine which generates audio output.",
    applications: [
      "Assistive communication tool",
      "Learning and teaching sign language",
      "Interactive kiosks for basic queries",
      "Human computer interaction research"
    ]
  },
  {
    id: 7,
    title: "Real-Time Bus Tracking & ETA System",
    shortDescription:
      "Shows live bus location on a map and estimated arrival time for each stop using GPS data.",
    year: "3rd",
    domain: "Web",
    difficulty: "Medium",
    tags: ["React", "Node.js", "Maps API", "REST"],
    problemStatement:
      "Commuters and students often wait at bus stops without knowing where the bus is or when it will arrive.",
    abstract:
      "This project tracks buses in real time using GPS devices or driver mobile apps. Location data is sent to a backend server, stored in a database and exposed via REST APIs. A React web application displays buses on an interactive map and calculates estimated arrival time for each stop.",
    components: [
      "GPS device or Android phone in bus",
      "Backend server (Node.js and Express)",
      "Database such as MongoDB or Firebase",
      "Frontend web app in React",
      "Map service like Google Maps or Leaflet",
      "REST APIs for location and ETA data"
    ],
    blockDiagram: [
      "Bus GPS Device / Driver App",
      "Backend Server & Database",
      "REST API",
      "Web / Mobile Client",
      "Map View + ETA Display"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Bus GPS Device / Driver App" -> "Backend Server & Database" ->
  "REST API" -> "Web / Mobile Client" -> "Map View + ETA Display";
}
`,
    working:
      "The GPS device or driver app sends latitude and longitude to the backend at fixed intervals. The backend updates the database with the latest position for each bus. When a user opens the web app, it calls REST APIs to fetch bus positions and displays icons on the map. The app computes distance from stops and estimates arrival time based on speed and route.",
    applications: [
      "College and school bus tracking",
      "City public transport",
      "Company shuttle tracking",
      "Fleet management dashboards"
    ]
  },
  {
    id: 8,
    title: "Campus FAQ Chatbot",
    shortDescription:
      "Chatbot that answers common questions about campus, departments and events using simple NLP models.",
    year: "2nd",
    domain: "AI/ML",
    difficulty: "Easy",
    tags: ["Python", "NLP", "Telegram Bot"],
    problemStatement:
      "New students frequently ask the same questions about admissions, departments and facilities. Handling all queries manually consumes staff time.",
    abstract:
      "The campus FAQ chatbot is a conversational agent that answers frequently asked questions about the institution. It uses simple natural language processing or rule based matching to identify the user intent and replies with prepared answers from a knowledge base. The bot can run on Telegram, a web widget or another chat platform.",
    components: [
      "Python environment",
      "Telegram bot API or web chat framework",
      "NLP library such as NLTK or spaCy",
      "FAQ knowledge base as JSON or database",
      "Server or cloud hosting"
    ],
    blockDiagram: [
      "User Query (Telegram / Web Chat)",
      "Chatbot Backend",
      "NLP / Intent Matching",
      "FAQ Knowledge Base",
      "Response to User"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "User Query (Telegram / Web)" -> "Chatbot Backend" ->
  "NLP / Intent Matching" -> "FAQ Knowledge Base" -> "Response to User";
}
`,
    working:
      "When a message is received, the chat platform forwards it to the backend. The backend cleans the text, performs intent detection and finds the closest question in the FAQ set. It then sends the corresponding answer back to the user. Conversation logs can be stored and analyzed to improve the knowledge base.",
    applications: [
      "Virtual assistant on college website",
      "Admission helpdesk automation",
      "Event information bot",
      "Generic FAQ bots for other domains"
    ]
  },
  {
    id: 9,
    title: "Smart Wireless Notice Board",
    shortDescription:
      "Displays text messages sent from a mobile app to an electronic notice board over wireless link.",
    year: "2nd",
    domain: "Communication",
    difficulty: "Easy",
    tags: ["Bluetooth", "LCD", "Microcontroller"],
    problemStatement:
      "Conventional notice boards require printing and manually pinning paper notices, which is slow and inconvenient.",
    abstract:
      "This project builds an electronic notice board where authorized users can send text messages wirelessly from a mobile device. A Bluetooth or Wi-Fi module receives the text and a microcontroller displays it on an LCD or LED matrix display.",
    components: [
      "Microcontroller board such as Arduino",
      "Bluetooth HC-05 or Wi-Fi module",
      "16x2 LCD or LED matrix display",
      "Push buttons for local control (optional)",
      "Mobile app or terminal for sending text",
      "Power supply and enclosure"
    ],
    blockDiagram: [
      "Authorized Mobile App",
      "Bluetooth / Wi-Fi Module",
      "Microcontroller",
      "LCD / LED Display"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Authorized Mobile App" -> "Bluetooth / Wi-Fi Module" ->
  "Microcontroller" -> "LCD / LED Display";
}
`,
    working:
      "The mobile application pairs with the wireless module and sends text when the user submits a notice. The microcontroller listens to the serial data, stores the message and displays it on the screen. Security can be improved by using a password or secret code in the message.",
    applications: [
      "Digital notice boards in schools and colleges",
      "Office and reception information displays",
      "Shops and promotional boards",
      "Bus stand or waiting hall displays"
    ]
  },
  {
    id: 10,
    title: "Industrial Parameter Monitoring using CAN",
    shortDescription:
      "Monitors multiple sensors in an industrial setup and shares data over CAN bus to a central controller.",
    year: "4th",
    domain: "Communication",
    difficulty: "Hard",
    tags: ["CAN Bus", "Sensors", "SCADA"],
    problemStatement:
      "Large industrial plants have many sensors spread over long distances. Point to point wiring is complex and not robust.",
    abstract:
      "This project demonstrates use of Controller Area Network bus for industrial parameter monitoring. Several sensor nodes with microcontrollers are connected on a common CAN bus. Each node sends sensor readings as CAN frames. A master node receives all frames and displays or logs the values on a small SCADA style interface.",
    components: [
      "Multiple microcontroller boards with CAN shields",
      "CAN transceiver modules",
      "Temperature, pressure or speed sensors",
      "Master controller with LCD or PC interface",
      "Termination resistors for CAN bus",
      "Power supply for all nodes"
    ],
    blockDiagram: [
      "Sensor Node 1",
      "Sensor Node 2",
      "Sensor Node 3",
      "Common CAN Bus",
      "Master Node / Gateway",
      "Display / SCADA PC"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Sensor Node 1" -> "CAN Bus";
  "Sensor Node 2" -> "CAN Bus";
  "Sensor Node 3" -> "CAN Bus";
  "CAN Bus" -> "Master Node / Gateway" -> "Display / SCADA PC";
}
`,
    working:
      "Each sensor node reads local sensor values, packs them into CAN frames with unique IDs and transmits them on the bus. The master node is configured to accept these IDs, decode the data and update displays or a PC application. Bus errors and status can be monitored using indicators.",
    applications: [
      "Industrial automation labs",
      "Automotive CAN bus demonstrations",
      "Building automation with distributed sensors",
      "Training on fieldbus communication"
    ]
  },
  {
    id: 11,
    title: "Student Performance Prediction using ML",
    shortDescription:
      "Predicts student performance based on attendance, internal marks and activity metrics.",
    year: "3rd",
    domain: "AI/ML",
    difficulty: "Medium",
    tags: ["Python", "Scikit-learn", "CSV Data"],
    problemStatement:
      "Weak students are often identified only after final exams, when it is late to provide effective support.",
    abstract:
      "This project uses machine learning to predict student performance from features such as attendance, internal marks and assignment scores. The model classifies students into categories like pass, fail or grade band, helping faculty to identify at risk students early.",
    components: [
      "Python with pandas, NumPy and scikit-learn",
      "CSV dataset of past student records",
      "Jupyter notebook or IDE",
      "Optional web UI using Flask or Streamlit"
    ],
    blockDiagram: [
      "Historical Student Data (CSV)",
      "Data Pre-processing & Feature Selection",
      "Train ML Model",
      "Trained Model",
      "New Student Inputs",
      "Performance / Risk Prediction"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Historical Student Data (CSV)" -> "Data Pre-processing & Feature Selection" ->
  "Train ML Model" -> "Trained Model";
  "New Student Inputs" -> "Trained Model" -> "Performance / Risk Prediction";
}
`,
    working:
      "The dataset is cleaned and split into training and test sets. Several models such as logistic regression and decision trees are trained and evaluated. The best model is saved. For a new student, the user enters data into a small script or web form and the model predicts the expected outcome and risk level.",
    applications: [
      "Identifying students needing academic support",
      "Planning remedial classes",
      "Education analytics for departments",
      "Demonstration of ML in education domain"
    ]
  },
  {
    id: 12,
    title: "RFID & Keypad based Door Lock",
    shortDescription:
      "Electronic door lock that supports both RFID card and PIN entry with basic event logging.",
    year: "2nd",
    domain: "Embedded",
    difficulty: "Easy",
    tags: ["RFID", "Keypad", "Servo", "Arduino"],
    problemStatement:
      "Mechanical locks can be lost or copied easily and do not provide electronic access logging.",
    abstract:
      "The RFID and keypad based door lock uses contactless RFID cards and a numeric keypad to control a door. An Arduino checks the card ID or PIN code and drives a servo or solenoid lock when access is granted. An LCD or buzzer shows feedback.",
    components: [
      "Arduino Uno or Nano",
      "RFID reader module and tags",
      "4x4 matrix keypad",
      "Servo motor or solenoid lock",
      "16x2 LCD (optional)",
      "Buzzer and LEDs",
      "Power supply"
    ],
    blockDiagram: [
      "RFID Reader",
      "Keypad",
      "Microcontroller",
      "Servo / Lock Driver",
      "Door Lock Mechanism",
      "LCD / Buzzer Feedback"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "RFID Reader" -> "Microcontroller";
  "Keypad" -> "Microcontroller";
  "Microcontroller" -> "Servo / Lock Driver" -> "Door Lock Mechanism";
  "Microcontroller" -> "LCD / Buzzer Feedback";
}
`,
    working:
      "When a card is tapped, the RFID reader sends its ID to the Arduino, which compares it with a list of allowed IDs. If valid, the servo rotates to unlock the door and an LED or buzzer indicates success. The keypad allows entry by PIN. Multiple wrong attempts can trigger an alarm.",
    applications: [
      "Lab and office door access",
      "Locker and cabinet security",
      "Attendance and access logging",
      "Smart home entry control"
    ]
  },
  {
    id: 13,
    title: "Solar Power Monitoring & Fault Detection",
    shortDescription:
      "Monitors solar panel parameters, detects abnormal conditions and reports them to a cloud dashboard.",
    year: "4th",
    domain: "IoT",
    difficulty: "Hard",
    tags: ["Solar Panel", "Sensors", "ESP32"],
    problemStatement:
      "Solar panels may have faults such as shading or loose connections that reduce power generation, but these are not always detected quickly.",
    abstract:
      "This project monitors voltage, current and temperature of a solar panel using sensors connected to an ESP32. The controller calculates power and energy and uploads the data to a cloud dashboard. Simple fault detection logic raises alerts when readings are abnormal.",
    components: [
      "Solar panel and small charge controller",
      "Current sensor",
      "Voltage divider for panel voltage",
      "Temperature sensor",
      "ESP32 or ESP8266 board",
      "Wi-Fi router and cloud platform",
      "Power and protection circuits"
    ],
    blockDiagram: [
      "Solar Panel",
      "Voltage / Current / Temp Sensors",
      "ESP32 Controller",
      "Cloud Dashboard / Database",
      "Fault Detection & Alerts"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Solar Panel" -> "Voltage / Current / Temp Sensors" ->
  "ESP32 Controller" -> "Cloud Dashboard / Database" ->
  "Fault Detection & Alerts";
}
`,
    working:
      "The ESP32 periodically samples sensor values and computes instantaneous power and daily energy. Data is sent to the cloud where graphs of energy generation are plotted. If power drops sharply or temperature is very high, the system flags a possible fault and sends notifications.",
    applications: [
      "Monitoring rooftop solar installations",
      "Institutional solar plants",
      "Research on solar performance",
      "Smart energy management demos"
    ]
  },
  {
    id: 14,
    title: "Gesture-Controlled Robot Car",
    shortDescription:
      "Robot car controlled by hand gestures using accelerometer and wireless communication.",
    year: "2nd",
    domain: "Embedded",
    difficulty: "Medium",
    tags: ["Accelerometer", "Motor Driver", "Wireless"],
    problemStatement:
      "Remote controlled cars using buttons or joysticks are common. A gesture based interface is more engaging and natural.",
    abstract:
      "The gesture controlled robot car moves in different directions based on tilt of the user hand. An accelerometer sensor mounted on a glove measures tilt and a transmitter controller sends commands wirelessly to a receiver controller on the robot, which drives the motors.",
    components: [
      "Robot chassis with two DC motors",
      "Transmitter microcontroller",
      "Receiver microcontroller",
      "Accelerometer sensor",
      "RF modules or Bluetooth modules",
      "Motor driver IC",
      "Battery packs for robot and transmitter"
    ],
    blockDiagram: [
      "Accelerometer on Hand",
      "Transmitter Microcontroller",
      "Wireless Link (RF / BT)",
      "Receiver Microcontroller",
      "Motor Driver",
      "Robot Motors"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "Accelerometer on Hand" -> "Transmitter Microcontroller" ->
  "Wireless Link (RF / BT)" -> "Receiver Microcontroller" ->
  "Motor Driver" -> "Robot Motors";
}
`,
    working:
      "The accelerometer outputs voltages representing tilt. The transmitter controller converts them to direction commands and sends them over RF or Bluetooth. The receiver decodes the commands and sets motor driver inputs to move the robot forward, backward, left or right. Neutral hand position stops the robot.",
    applications: [
      "Educational robotics project",
      "Gesture based control experiments",
      "Tech fair demonstrations",
      "Base for advanced autonomous robots"
    ]
  },
  {
    id: 15,
    title: "Weather-Adaptive Smart Street Lighting",
    shortDescription:
      "Automatically dims or brightens street lights based on ambient light and motion detection.",
    year: "3rd",
    domain: "Automation",
    difficulty: "Medium",
    tags: ["LDR", "PIR Sensor", "Relays"],
    problemStatement:
      "Street lights are often turned on at full brightness all night regardless of traffic, which wastes energy.",
    abstract:
      "The smart street lighting system controls the brightness of lamps based on ambient light and movement. An LDR detects day or night while PIR or ultrasonic sensors detect motion of vehicles or pedestrians. Lamps stay at dim level during low traffic and brighten when motion is detected.",
    components: [
      "Microcontroller board such as Arduino",
      "Light dependent resistor (LDR)",
      "PIR or ultrasonic motion sensors",
      "LED street lamp models or high power LEDs",
      "MOSFET or relay drivers",
      "Power supply and protection circuits",
      "Optional RTC for time based scheduling"
    ],
    blockDiagram: [
      "LDR Sensor",
      "Motion Sensors",
      "Microcontroller",
      "Dim/Bright Control Logic",
      "Driver Circuit",
      "LED Street Lamps"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box,style="rounded,filled",fontsize=10];
  "LDR Sensor" -> "Microcontroller";
  "Motion Sensors" -> "Microcontroller";
  "Microcontroller" -> "Dim/Bright Control Logic" ->
  "Driver Circuit" -> "LED Street Lamps";
}
`,
    working:
      "In daytime the LDR senses high light level and the controller keeps lights off. At night lights operate at a dim level. When motion sensors detect a vehicle or person, brightness of nearby lamps is increased for a short period and then reduced back to dim level after no motion.",
    applications: [
      "Energy efficient street and campus lighting",
      "Parking lots and pathways",
      "Smart city pilot projects",
      "Introductory automation and sensor project"
    ]
  }
  ,

    {
    id: 16,
    title: "Smart Automatic Room Light using LDR & IR",
    shortDescription:
      "Automatically turns room light ON when someone enters and ambient light is low, and OFF when they leave.",
    year: "1st",
    domain: "Automation",
    difficulty: "Easy",
    tags: ["LDR", "IR Sensor", "Relay"],
    problemStatement:
      "Lights in classrooms and hostels are often left ON even when there is enough daylight or when nobody is inside, wasting electricity.",
    abstract:
      "This project builds a simple automatic lighting system for a room. An LDR senses ambient light level, while an IR or PIR sensor detects human presence. A small controller or comparator circuit decides whether to switch the room light ON or OFF through a relay. The system ensures that the light is ON only when the room is occupied and dark.",
    components: [
      "LDR (Light Dependent Resistor)",
      "IR or PIR motion sensor",
      "Op-amp / small microcontroller (optional)",
      "Relay module",
      "AC bulb and holder",
      "Resistors, potentiometer and PCB",
      "5V power supply"
    ],
    blockDiagram: [
      "LDR Sensor",
      "IR / PIR Sensor",
      "Control Circuit / Microcontroller",
      "Relay Driver",
      "Room Light"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "LDR Sensor" -> "Control Circuit / Microcontroller";
  "IR / PIR Sensor" -> "Control Circuit / Microcontroller";
  "Control Circuit / Microcontroller" -> "Relay Driver" -> "Room Light";
}
`,
    working:
      "The LDR forms a voltage divider whose output changes with ambient light. The IR/PIR sensor generates a HIGH signal when a person is detected. The controller or comparator logic checks both inputs: if light level is below a set threshold and presence is detected, the relay is energized and the room light turns ON. When the room is vacant or daylight is sufficient, the relay is turned OFF.",
    applications: [
      "Automatic lighting in classrooms and labs",
      "Hostel corridors and bathrooms",
      "Energy-saving systems for offices",
      "Introductory automation project for 1st year"
    ]
  },
  {
    id: 17,
    title: "Fire & Smoke Alarm with Buzzer Alert",
    shortDescription:
      "Detects smoke or high temperature and triggers a loud alarm and indicator LEDs.",
    year: "1st",
    domain: "Embedded",
    difficulty: "Easy",
    tags: ["Smoke Sensor", "Temperature", "Buzzer"],
    problemStatement:
      "Small labs, stores and server rooms often lack low-cost fire detection systems, increasing risk of late response to fire accidents.",
    abstract:
      "The project is a basic fire and smoke alarm system using gas/smoke sensors and temperature sensors. When smoke concentration or temperature crosses preset limits, a microcontroller or simple comparator circuit activates a buzzer and warning LED. It can be mounted near electrical panels, labs or storerooms to provide an early warning.",
    components: [
      "Smoke/gas sensor (e.g. MQ-2 or MQ-6)",
      "Temperature sensor (e.g. LM35 / thermistor)",
      "Small microcontroller or comparator circuit",
      "Buzzer",
      "Red and green LEDs with resistors",
      "Power supply module",
      "PCB and wiring"
    ],
    blockDiagram: [
      "Smoke / Gas Sensor",
      "Temperature Sensor",
      "Control Circuit / Microcontroller",
      "Alarm Buzzer",
      "Warning LEDs"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Smoke / Gas Sensor" -> "Control Circuit / Microcontroller";
  "Temperature Sensor" -> "Control Circuit / Microcontroller";
  "Control Circuit / Microcontroller" -> "Alarm Buzzer";
  "Control Circuit / Microcontroller" -> "Warning LEDs";
}
`,
    working:
      "The smoke sensor output voltage increases with smoke concentration while the temperature sensor reports ambient temperature. The control circuit samples both readings and compares them with thresholds. If either value indicates danger, it turns on the buzzer and warning LED. A green LED indicates safe conditions. Sensitivity can be adjusted using preset potentiometers.",
    applications: [
      "Basic fire safety in labs and stores",
      "Kitchen or hostel corridor monitoring",
      "Mini project for sensor interfacing",
      "Educational display in safety awareness events"
    ]
  },
  {
    id: 18,
    title: "Water Level Indicator for Overhead Tank",
    shortDescription:
      "Shows water level in an overhead tank using LEDs or display and warns when the tank is full.",
    year: "1st",
    domain: "Embedded",
    difficulty: "Easy",
    tags: ["Probes", "LED Bar", "Buzzer"],
    problemStatement:
      "In many homes water overflows from overhead tanks because there is no simple indication of tank level during pumping.",
    abstract:
      "This project uses a set of conducting probes placed at different heights in an overhead tank to sense the water level. The probes are connected to a simple transistor or microcontroller circuit that lights LEDs to show LOW, MEDIUM and FULL levels. A buzzer alerts the user when the tank is full so that the pump can be turned OFF.",
    components: [
      "Metal probe wires / screws for level sensing",
      "Resistors and transistors",
      "LED indicators for each level",
      "Buzzer",
      "Power supply",
      "Optional microcontroller for display",
      "Connecting cables to tank"
    ],
    blockDiagram: [
      "Tank Level Probes",
      "Sensing & Interface Circuit",
      "Level Display (LEDs / 7-seg)",
      "Full-Tank Buzzer"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Tank Level Probes" -> "Sensing & Interface Circuit" ->
  "Level Display (LEDs)" -> "User";
  "Sensing & Interface Circuit" -> "Full-Tank Buzzer";
}
`,
    working:
      "Each probe pair completes a circuit when water reaches that height, pulling the associated input line HIGH. The interface circuit decodes which probes are active and lights LEDs for 25%, 50%, 75% and 100% levels. When the top probe is reached, a buzzer is activated. The design can be built with simple transistors or a low-cost microcontroller.",
    applications: [
      "Home and hostel water tank monitoring",
      "Motor room indicator panels",
      "Community water tanks",
      "Entry-level analog/digital interfacing project"
    ]
  },
  {
    id: 19,
    title: "Temperature-Based Fan Speed Controller",
    shortDescription:
      "Controls speed of a DC/AC fan automatically based on room temperature.",
    year: "1st",
    domain: "Embedded",
    difficulty: "Medium",
    tags: ["LM35", "PWM", "Fan Control"],
    problemStatement:
      "Conventional fans run at a fixed speed unless manually adjusted, which may not match the temperature and wastes power.",
    abstract:
      "In this project, a temperature sensor measures room temperature and a microcontroller adjusts the fan speed accordingly using PWM for DC fan or a triac control circuit for AC fan. At low temperature the fan runs slowly, and at higher temperature it speeds up, maintaining comfort while saving energy.",
    components: [
      "Temperature sensor (LM35 / thermistor)",
      "Microcontroller board (e.g. Arduino Uno)",
      "MOSFET driver for DC fan or triac driver circuit",
      "DC fan or small AC fan",
      "LCD or LEDs for temperature indication",
      "Power supply",
      "Supporting passive components"
    ],
    blockDiagram: [
      "Temperature Sensor",
      "Microcontroller",
      "PWM / Triac Driver",
      "Fan Motor",
      "User Display (optional)"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Temperature Sensor" -> "Microcontroller" ->
  "PWM / Triac Driver" -> "Fan Motor";
  "Microcontroller" -> "User Display (optional)";
}
`,
    working:
      "The temperature sensor produces a voltage proportional to temperature. The microcontroller samples this voltage, converts it to degrees Celsius and compares it with setpoints. It then adjusts the duty cycle of a PWM signal (for DC fan) or firing angle of a triac (for AC fan). Higher temperature corresponds to higher fan speed. The current temperature and speed level can be shown on a small display.",
    applications: [
      "Smart fans in hostels and classrooms",
      "Server room cooling control",
      "Intro to closed-loop control systems",
      "Automotive or cabinet cooling"
    ]
  },
  {
    id: 20,
    title: "RFID-Based Library Entry Logger",
    shortDescription:
      "Logs entry and exit of students in the library using RFID cards and displays basic statistics.",
    year: "1st",
    domain: "Embedded",
    difficulty: "Medium",
    tags: ["RFID", "Logging", "LCD"],
    problemStatement:
      "Library usage is often recorded manually in logbooks, which is time-consuming and not easily analyzable.",
    abstract:
      "This project uses RFID cards assigned to students for automatic logging of entry and exit from the library. When a student taps the card on the reader at the entrance, the system stores the ID and time stamp in memory and shows a welcome message on an LCD. Basic stats like current number of users or daily count can be displayed.",
    components: [
      "RFID reader (RC522) and RFID cards",
      "Microcontroller board (Arduino / similar)",
      "16x2 LCD with I2C interface",
      "Buzzer and status LED",
      "EEPROM / SD card module (optional) for logs",
      "Power supply and enclosure"
    ],
    blockDiagram: [
      "RFID Card",
      "RFID Reader",
      "Microcontroller",
      "LCD Display & Buzzer",
      "Local Memory / PC (optional)"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "RFID Card" -> "RFID Reader" -> "Microcontroller";
  "Microcontroller" -> "LCD Display & Buzzer";
  "Microcontroller" -> "Local Memory / PC (optional)";
}
`,
    working:
      "When a card is presented near the reader, its unique ID is sent over SPI to the microcontroller. The program checks if it is already inside the library; if not, it logs an entry time, otherwise it logs exit. The display shows name or ID with a short message and may show current occupancy. Logs can be stored locally or sent to a PC for later analysis.",
    applications: [
      "Library and reading room entry systems",
      "Computer lab access logging",
      "Small-scale attendance systems",
      "Foundation project for access control"
    ]
  },
  {
    id: 21,
    title: "Rain Sensing Wiper / Umbrella Activator",
    shortDescription:
      "Detects rainfall and automatically activates a model wiper or indicates umbrella requirement.",
    year: "1st",
    domain: "Automation",
    difficulty: "Medium",
    tags: ["Rain Sensor", "Motor Driver"],
    problemStatement:
      "Drivers may sometimes delay switching on wipers during sudden rain, affecting visibility, and people may step out without realizing it is drizzling.",
    abstract:
      "The project uses a rain sensor plate to detect raindrops and control a small wiper motor or indicator. In a car model, the rain sensor signal starts the wiper motor. In a home/hostel application, an LED or buzzer near the exit can alert people to carry an umbrella.",
    components: [
      "Rain sensor module",
      "Microcontroller or simple transistor driver",
      "DC motor with wiper linkage (model)",
      "LED indicator / buzzer",
      "Motor driver IC (L293D or similar)",
      "Power supply"
    ],
    blockDiagram: [
      "Rain Sensor Plate",
      "Conditioning / Microcontroller",
      "Motor Driver / Indicator",
      "Wiper Motor / Umbrella Alert"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Rain Sensor Plate" -> "Conditioning / Microcontroller" ->
  "Motor Driver / Indicator" -> "Wiper Motor / Umbrella Alert";
}
`,
    working:
      "The rain sensor outputs a voltage based on water drops on its surface. When rain is detected beyond a threshold, the controller activates the motor driver which runs the wiper motor at set speed. In a simplified version, it may only light an LED or buzzer to signal rainfall.",
    applications: [
      "Model of automatic car wiper system",
      "Rain alert at building exits",
      "Water leakage detection on roofs",
      "Introductory sensor and driver project"
    ]
  },
  {
    id: 22,
    title: "Solar-Powered Mobile Charging Station",
    shortDescription:
      "Provides USB charging for phones using a small solar panel and battery with charge controller.",
    year: "2nd",
    domain: "Other",
    difficulty: "Medium",
    tags: ["Solar", "Battery", "USB Charger"],
    problemStatement:
      "Students in campus outdoor areas may not have easy access to power sockets for charging mobiles or small devices.",
    abstract:
      "This project creates a compact solar-powered charging station. A small solar panel charges a 12V or 7.4V battery through a charge controller circuit. A DC-DC converter then provides regulated 5V USB output for charging mobile phones. Basic indicators show charging and battery status.",
    components: [
      "Solar panel (10–20 W)",
      "Charge controller module (PWM or MPPT type)",
      "Rechargeable battery (Li-ion or lead-acid)",
      "DC-DC buck converter to 5V USB",
      "USB sockets",
      "Voltage/current indicators (optional)",
      "Enclosure and wiring"
    ],
    blockDiagram: [
      "Solar Panel",
      "Charge Controller",
      "Battery Storage",
      "DC-DC Converter",
      "USB Output Ports"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Solar Panel" -> "Charge Controller" -> "Battery Storage" ->
  "DC-DC Converter" -> "USB Output Ports";
}
`,
    working:
      "The solar panel converts sunlight to DC power which is regulated by the charge controller to safely charge the battery. The DC-DC converter steps the battery voltage down to a stable 5V for USB ports. Indicator LEDs show when the system is charging and when the battery is low or full.",
    applications: [
      "Outdoor charging stations in campus",
      "Rural or off-grid areas",
      "Disaster relief charging points",
      "Intro project on renewable energy systems"
    ]
  },
  {
    id: 23,
    title: "Touchless Hand Sanitizer Dispenser",
    shortDescription:
      "Automatically dispenses sanitizer when a hand is detected under the nozzle using an IR sensor.",
    year: "2nd",
    domain: "Automation",
    difficulty: "Easy",
    tags: ["IR Sensor", "Pump", "Hygiene"],
    problemStatement:
      "Manual sanitizer bottles require physical touch which can spread germs, especially during outbreaks or in hospitals.",
    abstract:
      "This project builds a touchless sanitizer dispenser using a proximity sensor and a small pump. When a hand is placed near the sensor, the microcontroller activates the pump for a fixed duration, dispensing a measured amount of sanitizer. It is suitable for placement at lab entrances and classrooms.",
    components: [
      "IR proximity or ultrasonic sensor",
      "Microcontroller (Arduino Nano or similar)",
      "Mini submersible pump or solenoid pump",
      "MOSFET / relay driver",
      "Sanitizer container with tubing",
      "Power supply",
      "Mounting frame"
    ],
    blockDiagram: [
      "Proximity Sensor",
      "Microcontroller",
      "Pump Driver",
      "Sanitizer Pump & Nozzle"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Proximity Sensor" -> "Microcontroller" ->
  "Pump Driver" -> "Sanitizer Pump & Nozzle";
}
`,
    working:
      "The sensor monitors distance below the nozzle. When an object (hand) is detected within a threshold range, the microcontroller turns ON the pump driver for a calibrated time, dispensing sanitizer. A short delay prevents re-triggering immediately after dispensing.",
    applications: [
      "Hospitals and clinics",
      "College labs and entrances",
      "Public restrooms and cafeterias",
      "Basic automation and hygiene project"
    ]
  },
  {
    id: 24,
    title: "Smart Parking Slot Detection System",
    shortDescription:
      "Detects availability of parking slots and displays them on an indicator board or mobile app.",
    year: "2nd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["Ultrasonic", "NodeMCU", "Display"],
    problemStatement:
      "Drivers waste time circulating in parking areas searching for empty slots, especially in malls and campuses.",
    abstract:
      "This project uses ultrasonic sensors or IR pairs installed in each parking slot to detect the presence of a vehicle. A NodeMCU/ESP controller collects sensor data and updates an indicator board showing free/occupied slots. Optionally, data can be uploaded to the cloud so users can check slot availability on a mobile app.",
    components: [
      "Multiple ultrasonic or IR sensors (one per slot)",
      "NodeMCU/ESP8266 or ESP32 controller",
      "LED indicator board or small LCD",
      "Resistors and wiring harness",
      "Power supply and mounting frame",
      "Optional IoT platform for remote view"
    ],
    blockDiagram: [
      "Slot Sensors",
      "NodeMCU / Central Controller",
      "Local Display Board",
      "Cloud / Mobile App (optional)"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Slot Sensors" -> "NodeMCU / Central Controller" ->
  "Local Display Board";
  "NodeMCU / Central Controller" -> "Cloud / Mobile App (optional)";
}
`,
    working:
      "Each sensor checks whether a vehicle is present in its slot and sends a digital signal to the controller. The firmware periodically reads all inputs, counts free and occupied slots, and updates the display board with arrows or numbers. If connected to the internet, the same data is uploaded to the cloud to be viewed on a mobile app.",
    applications: [
      "College or office parking lots",
      "Malls and multiplexes",
      "Smart city parking guidance",
      "IoT sensing and aggregation demo"
    ]
  },
  {
    id: 25,
    title: "IoT Health Band for Heart Rate & Temperature",
    shortDescription:
      "Wearable prototype that measures heart rate and body temperature and sends data to a mobile dashboard.",
    year: "2nd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["Pulse Sensor", "ESP32", "Wearable"],
    problemStatement:
      "Basic vital signs like pulse rate and body temperature are not continuously monitored for most people, limiting early detection of health issues.",
    abstract:
      "The IoT health band is a wrist-worn prototype that uses a pulse sensor and temperature sensor connected to an ESP32 or similar microcontroller. It periodically measures heart rate and skin temperature and sends the data via Bluetooth/Wi-Fi to a mobile app or web dashboard, where trends can be monitored.",
    components: [
      "ESP32 or similar low-power microcontroller",
      "Pulse sensor (photoplethysmography type)",
      "Temperature sensor (e.g. DS18B20 or analog sensor)",
      "Li-ion battery and charging module",
      "Small OLED display (optional)",
      "Wrist strap / enclosure",
      "Mobile app / dashboard"
    ],
    blockDiagram: [
      "Pulse & Temp Sensors",
      "ESP32 Controller",
      "Wireless Link (BT/Wi-Fi)",
      "Mobile App / Dashboard"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Pulse & Temp Sensors" -> "ESP32 Controller" ->
  "Wireless Link (BT/Wi-Fi)" -> "Mobile App / Dashboard";
}
`,
    working:
      "The ESP32 reads analog and digital data from the pulse and temperature sensors at regular intervals. It calculates heart rate in beats per minute and logs temperature. The readings are transmitted using Bluetooth or Wi-Fi to a paired phone or cloud server. The app can show graphs and simple alerts when values cross configured ranges.",
    applications: [
      "Health monitoring for students and elderly",
      "Sports/fitness tracking prototypes",
      "IoT wearable development",
      "Base for advanced telemedicine systems"
    ]
  },
  {
    id: 26,
    title: "Anti-Sleep Alarm for Drivers using Eye Blink Sensor",
    shortDescription:
      "Monitors driver eye blinking patterns and triggers an alarm if drowsiness is detected.",
    year: "2nd",
    domain: "Embedded",
    difficulty: "Medium",
    tags: ["IR Sensor", "Eye Blink", "Safety"],
    problemStatement:
      "Driver drowsiness is a major cause of road accidents, especially in late-night or long-distance driving.",
    abstract:
      "This project uses an eye blink sensor based on IR reflection mounted on a spectacle frame. A microcontroller analyzes blink frequency and eye closure duration. If eyes remain closed for longer than a threshold, indicating sleepiness, a buzzer and vibration motor are activated to alert the driver.",
    components: [
      "Eye blink sensor (IR transmitter + receiver)",
      "Microcontroller (Arduino / similar)",
      "Buzzer and vibration motor",
      "LED indicator",
      "Power supply or battery pack",
      "Mounting on spectacles or headband"
    ],
    blockDiagram: [
      "Eye Blink Sensor",
      "Microcontroller",
      "Alarm Buzzer / Vibrator",
      "Status LED"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Eye Blink Sensor" -> "Microcontroller" ->
  "Alarm Buzzer / Vibrator";
  "Microcontroller" -> "Status LED";
}
`,
    working:
      "The IR sensor produces pulses corresponding to eye blinks. The microcontroller measures time between blinks and duration when the eye is closed. When it detects continuous closure beyond a safe limit or very low blink rate over a period, it triggers the buzzer and vibration motor to wake the driver.",
    applications: [
      "Safety system for bus and truck drivers",
      "Car drowsiness alert add-on",
      "Demo for biomedical sensing",
      "Research base for advanced driver monitoring"
    ]
  },
  {
    id: 27,
    title: "Warehouse Temperature & Fire Monitoring Node",
    shortDescription:
      "Low-cost wireless node to monitor temperature, humidity and smoke in warehouses or labs.",
    year: "2nd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["DHT22", "Smoke Sensor", "LoRa/Wi-Fi"],
    problemStatement:
      "Large warehouses and storerooms lack continuous monitoring of temperature and fire risk, leading to late detection of hazardous conditions.",
    abstract:
      "This project develops a small IoT node that combines temperature-humidity (DHT22) and smoke sensors with a microcontroller. It periodically sends readings over Wi-Fi or LoRa to a central dashboard. Local buzzer alerts are given for extreme conditions. Multiple nodes can be deployed around a warehouse.",
    components: [
      "Microcontroller (ESP8266/ESP32 or Arduino + LoRa)",
      "DHT22 temperature and humidity sensor",
      "Smoke/gas sensor (MQ-2/MQ-135)",
      "Buzzer and status LED",
      "Enclosure and mounting hardware",
      "Power supply or battery pack",
      "Central receiver / gateway (for LoRa)"
    ],
    blockDiagram: [
      "Temp & Humidity Sensor",
      "Smoke Sensor",
      "Microcontroller Node",
      "Local Buzzer",
      "Gateway / Cloud Dashboard"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Temp & Humidity Sensor" -> "Microcontroller Node";
  "Smoke Sensor" -> "Microcontroller Node";
  "Microcontroller Node" -> "Local Buzzer";
  "Microcontroller Node" -> "Gateway / Cloud Dashboard";
}
`,
    working:
      "Sensors feed environmental data to the microcontroller, which checks them against maximum allowable limits. If values exceed safe thresholds, it activates the local buzzer and sends an urgent message to the gateway or cloud. Under normal conditions, it periodically transmits readings for logging and visualization.",
    applications: [
      "Warehouse and cold storage monitoring",
      "Lab safety and environmental logging",
      "Smart building fire monitoring",
      "Intro to multi-sensor IoT networks"
    ]
  },
  {
    id: 28,
    title: "AI-Based Smart Dustbin with Auto Lid & Fill-Level Alert",
    shortDescription:
      "Dustbin that opens lid automatically when a person approaches and notifies staff when it is nearly full.",
    year: "3rd",
    domain: "AI/ML",
    difficulty: "Medium",
    tags: ["Ultrasonic", "Servo", "Image Classification"],
    problemStatement:
      "Public bins often remain open causing foul smell, or overflow because cleaning staff do not know when they are full.",
    abstract:
      "The smart dustbin uses an ultrasonic sensor to detect when a user approaches, opening the lid with a servo motor. A second sensor inside measures fill level, and an ESP32 sends alerts when the bin is nearly full. An optional camera with a lightweight ML model can classify waste type (recyclable vs non-recyclable) to encourage proper disposal.",
    components: [
      "ESP32 or similar controller",
      "Ultrasonic sensor for user detection",
      "Ultrasonic or IR sensor for fill level",
      "Servo motor for lid control",
      "Optional camera module",
      "Battery or DC adapter",
      "Plastic bin and mounting hardware"
    ],
    blockDiagram: [
      "User Proximity Sensor",
      "ESP32 Controller",
      "Servo Motor (Lid)",
      "Fill-Level Sensor",
      "Alert System / Cloud"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "User Proximity Sensor" -> "ESP32 Controller" -> "Servo Motor (Lid)";
  "Fill-Level Sensor" -> "ESP32 Controller" -> "Alert System / Cloud";
}
`,
    working:
      "When someone comes close, the proximity sensor triggers the ESP32 to rotate the servo and open the lid for a few seconds. Inside, the fill-level sensor measures distance to the waste surface; when it crosses a threshold, the ESP32 sends an alert via Wi-Fi to a dashboard or Telegram bot. With camera + ML, images of waste can be classified for segregation.",
    applications: [
      "Smart campus waste management",
      "Malls, airports and public spaces",
      "Awareness projects on cleanliness",
      "Practical combination of IoT and ML"
    ]
  },
  {
    id: 29,
    title: "ESP32 Smart Doorbell with Image Capture to Cloud",
    shortDescription:
      "Doorbell that captures visitor image and uploads it to cloud or sends to mobile when pressed.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["ESP32-CAM", "Doorbell", "Cloud Storage"],
    problemStatement:
      "Conventional doorbells only ring locally; residents cannot see who visited when they were away.",
    abstract:
      "This project uses an ESP32-CAM module as a smart doorbell. When a visitor presses the bell, the camera captures an image and uploads it to cloud storage or sends it via messaging API. A buzzer rings inside the house, and owners can later see a gallery of visitors or receive instant notifications.",
    components: [
      "ESP32-CAM module",
      "Push-button for doorbell",
      "Buzzer and chime circuit",
      "Wi-Fi router",
      "Cloud storage / Telegram/WhatsApp API",
      "5V power supply",
      "Door-mount enclosure"
    ],
    blockDiagram: [
      "Doorbell Button",
      "ESP32-CAM",
      "Local Buzzer",
      "Cloud Storage / Notification Service",
      "User Mobile / Web App"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Doorbell Button" -> "ESP32-CAM" -> "Cloud Storage / Notification Service" -> "User Mobile / Web App";
  "ESP32-CAM" -> "Local Buzzer";
}
`,
    working:
      "Pressing the doorbell generates an interrupt on the ESP32-CAM, which immediately captures an image frame, compresses it and uploads it using HTTP or MQTT to a server or messaging service. The same event activates a local buzzer. The owner can open the app or Telegram bot to view images of recent visitors.",
    applications: [
      "Home and apartment security",
      "Office reception visitor log",
      "Hostel room visitor monitoring",
      "Intro project to ESP32-CAM and cloud APIs"
    ]
  },
  {
    id: 30,
    title: "Smart Energy Sharing System Between Homes",
    shortDescription:
      "Monitors solar generation and load in two homes and suggests or simulates energy sharing between them.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Hard",
    tags: ["Smart Grid", "Energy Meter", "ESP32"],
    problemStatement:
      "Small rooftop solar systems sometimes generate excess energy while neighboring homes still rely on grid power, but there is no simple way to visualize or plan sharing.",
    abstract:
      "This project models a micro smart grid between two or more homes. Each home has an energy monitoring node that measures consumption and solar generation. Data is sent to a central server that calculates surplus or deficit and suggests possible energy sharing or credits. A dashboard visualizes energy flow between homes.",
    components: [
      "Energy monitoring modules (current/voltage sensors)",
      "ESP32/NodeMCU at each house node",
      "Central server or Raspberry Pi",
      "Web dashboard (React/Chart.js)",
      "Wi-Fi network",
      "Test loads and mini solar setups"
    ],
    blockDiagram: [
      "House A Energy Node",
      "House B Energy Node",
      "Central Server / Broker",
      "Energy Sharing Algorithm",
      "User Dashboard"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "House A Energy Node" -> "Central Server / Broker";
  "House B Energy Node" -> "Central Server / Broker";
  "Central Server / Broker" -> "Energy Sharing Algorithm" -> "User Dashboard";
}
`,
    working:
      "Current and voltage sensors at each house feed data to ESP32 nodes which calculate power and send readings periodically to the central server via MQTT/HTTP. The server computes surplus or deficit per house and simulates virtual energy transfer or credits. The dashboard shows per-house usage, generation and possible sharing paths, demonstrating peer-to-peer energy trade.",
    applications: [
      "Smart microgrid concepts",
      "Community solar sharing models",
      "Research prototypes for energy markets",
      "Educational smart grid demo"
    ]
  },
  {
    id: 31,
    title: "Industrial Machine Vibration Monitoring Node",
    shortDescription:
      "Monitors vibration of motors or machines and detects abnormal patterns indicating faults.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Hard",
    tags: ["Accelerometer", "Condition Monitoring"],
    problemStatement:
      "Unexpected failure of rotating machines in industries causes downtime and maintenance cost; routine manual checks miss early signs.",
    abstract:
      "The project uses an accelerometer attached to a motor or machine to measure vibration signatures. A microcontroller calculates RMS vibration levels and optionally applies FFT for frequency analysis. Data is sent to a central system that flags abnormal patterns, enabling predictive maintenance.",
    components: [
      "3-axis accelerometer (ADXL335/345 etc.)",
      "Microcontroller (STM32/ESP32/Arduino)",
      "Signal conditioning circuits",
      "Wireless module (Wi-Fi/LoRa)",
      "Central PC or server for visualization",
      "Machine model or motor setup"
    ],
    blockDiagram: [
      "Vibration Sensor (Accelerometer)",
      "Signal Conditioning",
      "Microcontroller Node",
      "Wireless Link",
      "Central Monitoring Dashboard"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Vibration Sensor (Accelerometer)" -> "Signal Conditioning" ->
  "Microcontroller Node" -> "Wireless Link" ->
  "Central Monitoring Dashboard";
}
`,
    working:
      "The accelerometer measures vibration acceleration which is filtered and digitized by the microcontroller. The firmware computes RMS values over windows and may perform FFT to extract dominant frequencies. These features are transmitted to a monitoring PC where thresholds or ML models detect anomalies compared to baseline healthy signatures.",
    applications: [
      "Predictive maintenance in industries",
      "Motor and pump health monitoring",
      "Vibration analysis teaching tool",
      "Base for Industry 4.0 systems"
    ]
  },
  {
    id: 32,
    title: "IoT Weather Station with Local Forecasting",
    shortDescription:
      "Measures local weather parameters and uses simple models to predict short-term forecast.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["BMP280", "DHT22", "Weather API"],
    problemStatement:
      "Global weather apps may not reflect micro-climate around a campus or locality, limiting local planning for events and agriculture.",
    abstract:
      "The IoT weather station collects temperature, humidity, pressure and rainfall data using sensors on a mast. An ESP32 sends readings to a cloud dashboard and also runs a basic forecasting algorithm using historical trends or integration with open weather APIs. Users can view live weather and 12–24 hour predictions.",
    components: [
      "ESP32/ESP8266 controller",
      "Temperature & humidity sensor (DHT22)",
      "Pressure sensor (BMP280/BME280)",
      "Rain gauge or rain sensor",
      "Anemometer (optional for wind speed)",
      "Wi-Fi connectivity",
      "Cloud database and dashboard"
    ],
    blockDiagram: [
      "Weather Sensors",
      "ESP32 Node",
      "Cloud Server / Database",
      "Forecast Algorithm",
      "Web / Mobile Dashboard"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Weather Sensors" -> "ESP32 Node" -> "Cloud Server / Database" ->
  "Forecast Algorithm" -> "Web / Mobile Dashboard";
}
`,
    working:
      "ESP32 periodically reads all sensors and sends the data with timestamps to the cloud. A backend script computes moving averages and pressure trends or combines them with online API data to estimate short-term forecast such as rain possibility and temperature range. The dashboard visualizes both current and predicted values.",
    applications: [
      "Campus micro-climate station",
      "Agricultural planning for nearby farms",
      "Research on environmental data",
      "Student-friendly weather portal"
    ]
  },
  {
    id: 33,
    title: "Water Quality Monitoring Node (TDS, pH, Turbidity)",
    shortDescription:
      "Measures basic water quality parameters and reports them to a cloud dashboard for analysis.",
    year: "3rd",
    domain: "IoT",
    difficulty: "Hard",
    tags: ["TDS Sensor", "pH Sensor", "ESP32"],
    problemStatement:
      "Water supplied to hostels, labs or nearby villages may not always meet quality norms, but regular laboratory testing is expensive and infrequent.",
    abstract:
      "This project builds a low-cost water quality node that uses TDS (Total Dissolved Solids), pH and turbidity sensors to check water quality in real time. An ESP32 controller reads sensor values, applies calibration functions and uploads them to a cloud platform where graphs and thresholds indicate potability.",
    components: [
      "ESP32 or similar microcontroller",
      "TDS sensor module",
      "pH sensor with amplifier board",
      "Turbidity sensor",
      "Water sample chamber / flow-through cell",
      "Wi-Fi access",
      "Cloud dashboard"
    ],
    blockDiagram: [
      "Water Sample",
      "TDS / pH / Turbidity Sensors",
      "ESP32 Controller",
      "Cloud Database",
      "Quality Dashboard / Alerts"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Water Sample" -> "TDS / pH / Turbidity Sensors" ->
  "ESP32 Controller" -> "Cloud Database" ->
  "Quality Dashboard / Alerts";
}
`,
    working:
      "Sensors immersed in the water sample output voltages corresponding to TDS, pH and turbidity. The ESP32 performs ADC conversion, calibrates values using known reference samples and sends processed readings over Wi-Fi. A dashboard compares them with WHO standards and highlights unsafe conditions or sudden changes.",
    applications: [
      "Campus drinking water monitoring",
      "Village water quality surveys",
      "Aquaculture and fish tanks",
      "Environmental engineering projects"
    ]
  },
  {
    id: 34,
    title: "AI-Based Traffic Density Analyzer & Smart Signal Controller",
    shortDescription:
      "Uses camera feeds to estimate traffic density at junctions and optimizes signal green time accordingly.",
    year: "4th",
    domain: "AI/ML",
    difficulty: "Hard",
    tags: ["Computer Vision", "OpenCV", "Traffic Control"],
    problemStatement:
      "Fixed-time traffic lights do not adapt to real-time traffic volume, causing unnecessary waiting and congestion at some lanes.",
    abstract:
      "This project processes video from cameras placed at each road of a junction. Using computer vision techniques such as background subtraction or deep learning object detection, it estimates vehicle count or density. A controller then allocates green signal duration proportionally, improving throughput and reducing waiting time.",
    components: [
      "CCTV or USB cameras (one per lane)",
      "PC or embedded board (Raspberry Pi / Jetson Nano)",
      "Python with OpenCV and ML frameworks",
      "Microcontroller/PLC or simulation for signal lights",
      "LED signal model",
      "Dataset of traffic scenarios"
    ],
    blockDiagram: [
      "Traffic Cameras",
      "Vision Processing Unit",
      "Density Estimation Algorithm",
      "Signal Timing Controller",
      "Traffic Lights"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Traffic Cameras" -> "Vision Processing Unit" ->
  "Density Estimation Algorithm" -> "Signal Timing Controller" ->
  "Traffic Lights";
}
`,
    working:
      "The system captures frames from each camera and either applies classical background subtraction or YOLO-like detectors to count vehicles. Density values for each lane are fed into a scheduling algorithm that computes green time slices. The controller actuates model traffic lights or sends commands to a simulated junction.",
    applications: [
      "Smart city traffic management",
      "Realistic final-year AI + embedded project",
      "Simulation tool for transport planners",
      "Base for adaptive traffic signal deployment"
    ]
  },
  {
    id: 35,
    title: "Smart Helmet with Accident Alert & Alcohol Detection",
    shortDescription:
      "Helmet that ensures the rider is wearing it, checks for alcohol and sends alert on impact.",
    year: "4th",
    domain: "Embedded",
    difficulty: "Hard",
    tags: ["MQ-3", "Accelerometer", "GSM"],
    problemStatement:
      "Riders often drive without helmets or under the influence of alcohol, and serious accidents may go unnoticed in remote areas.",
    abstract:
      "The smart helmet project integrates multiple safety features: a strap sensor ensures the helmet is worn, an alcohol sensor checks breath, and an accelerometer detects high-impact accidents. The bike ignition can be disabled if helmet is not worn or alcohol is detected. During an accident, a GSM/GPS module sends location details to emergency contacts.",
    components: [
      "Helmet with strap switch / IR sensor",
      "Alcohol sensor (MQ-3)",
      "Accelerometer sensor",
      "Microcontroller",
      "GSM + GPS module",
      "Relay to control ignition (for model)",
      "Battery pack"
    ],
    blockDiagram: [
      "Helmet Wear Sensor",
      "Alcohol Sensor",
      "Accelerometer",
      "Microcontroller",
      "Ignition Control Relay",
      "GSM/GPS for Alerts"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Helmet Wear Sensor" -> "Microcontroller";
  "Alcohol Sensor" -> "Microcontroller";
  "Accelerometer" -> "Microcontroller";
  "Microcontroller" -> "Ignition Control Relay";
  "Microcontroller" -> "GSM/GPS for Alerts";
}
`,
    working:
      "Before starting, the microcontroller checks if the helmet wear sensor is active and the alcohol level is below threshold. If not, it keeps the ignition relay open. During driving, the accelerometer is monitored; upon detecting a severe shock, it assumes an accident and sends SMS with GPS coordinates to stored contacts.",
    applications: [
      "Two-wheeler rider safety",
      "Student-focused road safety campaign",
      "Integration of multiple embedded subsystems",
      "Prototype for commercial smart helmets"
    ]
  },
  {
    id: 36,
    title: "AI Document Scanner with Perspective Correction & OCR",
    shortDescription:
      "Scans documents using a camera, corrects perspective and performs text recognition.",
    year: "4th",
    domain: "AI/ML",
    difficulty: "Hard",
    tags: ["Image Processing", "OCR", "Python"],
    problemStatement:
      "Capturing documents with a phone camera often results in skewed images with poor readability and no searchable text.",
    abstract:
      "The AI document scanner captures images of documents from a mobile or webcam, detects document edges, performs perspective transformation to produce a flat view, enhances contrast and runs OCR to extract editable text. A simple UI lets users capture, crop, enhance and export PDF or text.",
    components: [
      "Laptop or PC with webcam / smartphone camera",
      "Python with OpenCV and Tesseract OCR",
      "GUI framework (Tkinter / PyQt / web UI)",
      "Dataset of document images",
      "Storage for saving PDFs and text"
    ],
    blockDiagram: [
      "Image Capture",
      "Edge Detection & Contour Finding",
      "Perspective Correction",
      "Image Enhancement",
      "OCR Engine",
      "PDF/Text Export"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Image Capture" -> "Edge Detection & Contour Finding" ->
  "Perspective Correction" -> "Image Enhancement" ->
  "OCR Engine" -> "PDF/Text Export";
}
`,
    working:
      "The system captures an input frame and uses edge detection and contour analysis to find the largest quadrilateral region. It then applies a perspective transform to warp the region into a rectangular top-down view, enhances brightness and contrast, and runs Tesseract OCR to extract text. Results and cleaned images are saved or exported as a multi-page PDF.",
    applications: [
      "Digitizing notes and question papers",
      "Building simple scanning apps",
      "Understanding document image processing",
      "Assistive tech for visually impaired users"
    ]
  },
  {
    id: 37,
    title: "Smart Agriculture Drone for Crop Spraying Simulation",
    shortDescription:
      "Quadcopter or ground robot prototype that simulates targeted crop spraying based on GPS or camera input.",
    year: "4th",
    domain: "Automation",
    difficulty: "Hard",
    tags: ["Drone", "Spraying", "Automation"],
    problemStatement:
      "Manual spraying of pesticides is labor-intensive, exposes workers to chemicals and may not target affected areas efficiently.",
    abstract:
      "This project demonstrates a scaled-down smart agriculture drone concept. A quadcopter or ground rover carries a small spray tank. Using GPS waypoints or camera-based row detection, it moves over a predefined path and activates the spray mechanism only over target regions. In indoor demos, colored water or markers can be used instead of chemicals.",
    components: [
      "Quadcopter frame or 4WD rover chassis",
      "Flight controller (or Arduino-based controller)",
      "GPS module (for outdoor demo)",
      "Small water pump and nozzle",
      "Tank for liquid",
      "Battery pack",
      "Optional camera for row detection"
    ],
    blockDiagram: [
      "Mission Planner / Waypoints",
      "Autopilot / Controller",
      "Motor Drivers (Propellers/Wheels)",
      "Spray Pump Controller",
      "Crop Area"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Mission Planner / Waypoints" -> "Autopilot / Controller" ->
  "Motor Drivers (Propellers/Wheels)" -> "Crop Area";
  "Autopilot / Controller" -> "Spray Pump Controller" -> "Crop Area";
}
`,
    working:
      "The operator programs a path or set of waypoints. The controller navigates the drone/rover along this path using GPS or odometry. When it reaches zones marked for spraying, it activates the pump via a relay or MOSFET. A feedback loop can monitor speed and spray flow to ensure uniform coverage.",
    applications: [
      "Precision agriculture concepts",
      "Drone robotics demonstrations",
      "Reducing human exposure to chemicals",
      "Platform for further AI-based crop analysis"
    ]
  },
  {
    id: 38,
    title: "AI Patient Monitoring System (Vitals + Fall Detection)",
    shortDescription:
      "Monitors vital signs and detects patient falls using sensors and AI models, sending alerts to caregivers.",
    year: "4th",
    domain: "AI/ML",
    difficulty: "Hard",
    tags: ["Wearable", "IMU", "Edge AI"],
    problemStatement:
      "In hospitals and home care, continuous monitoring of elderly or critical patients is challenging; falls and abnormal vitals may go unnoticed.",
    abstract:
      "This system combines a wearable sensor node measuring heart rate and motion with a bed-side processor running AI models. The node sends vitals and accelerometer data wirelessly. The processor detects falls from IMU patterns and checks for abnormal vital ranges, sending alerts via SMS/app to caregivers.",
    components: [
      "Wearable microcontroller (ESP32 / nRF52)",
      "Pulse and temperature sensors",
      "IMU/accelerometer sensor",
      "Gateway device (Raspberry Pi / PC)",
      "Wi-Fi/BLE communication",
      "SMS/app notification service"
    ],
    blockDiagram: [
      "Wearable Sensors (Pulse, Temp, IMU)",
      "Wearable Node",
      "Wireless Link",
      "Gateway with AI Models",
      "Alert System to Caregivers"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Wearable Sensors (Pulse, Temp, IMU)" -> "Wearable Node" ->
  "Wireless Link" -> "Gateway with AI Models" ->
  "Alert System to Caregivers";
}
`,
    working:
      "The wearable node periodically measures vitals and streams IMU readings. The gateway runs scripts that analyze vitals for out-of-range values and classify IMU sequences using a trained model to detect falls. When an event occurs, the system records data and sends alerts to registered mobile numbers or a nursing station dashboard.",
    applications: [
      "Elderly care monitoring",
      "Hospital step-down units",
      "Rehabilitation centers",
      "Base for medical IoT products"
    ]
  },
  {
    id: 39,
    title: "Autonomous Warehouse Robot with Line Following & Obstacle Avoidance",
    shortDescription:
      "Robot that follows predefined paths in a warehouse, stops at stations and avoids obstacles.",
    year: "4th",
    domain: "Automation",
    difficulty: "Hard",
    tags: ["Line Follower", "Ultrasonic", "Logistics"],
    problemStatement:
      "Manual movement of trolleys inside warehouses is slow and increases labor cost; full-scale AGVs are expensive.",
    abstract:
      "The project implements a scaled-down autonomous guided vehicle (AGV) for warehouses. The robot follows a line on the floor using IR sensors, stops at marked stations based on RFID or QR codes, and uses ultrasonic sensors for obstacle detection. It can simulate carrying bins between shelves and packing stations.",
    components: [
      "4WD robot chassis with DC motors",
      "Line sensor array (IR reflectance sensors)",
      "Ultrasonic obstacle sensor",
      "Microcontroller (Arduino/STM32)",
      "RFID/QR code reader (for station ID)",
      "Motor driver module",
      "Battery pack"
    ],
    blockDiagram: [
      "Line Sensors",
      "Microcontroller",
      "Motor Driver & Motors",
      "Station ID Sensor (RFID/QR)",
      "Ultrasonic Obstacle Sensor"
    ],
    blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Line Sensors" -> "Microcontroller" -> "Motor Driver & Motors";
  "Station ID Sensor (RFID/QR)" -> "Microcontroller";
  "Ultrasonic Obstacle Sensor" -> "Microcontroller";
}
`,
    working:
      "The line sensor array provides position error relative to the track, which the microcontroller uses in a PID or simple control rule to adjust motor speeds and stay on the line. When station markers are detected via RFID/QR, the robot stops and simulates loading/unloading. Ultrasonic sensors continuously check for obstacles; if one is detected within a threshold distance, the robot slows or stops until the path is clear.",
    applications: [
      "Automated material handling in warehouses",
      "Factory floor logistics demos",
      "Education on AGV and robotics",
      "Base for more advanced SLAM-based robots"
    ]
  }

  ,
  {
  id: 40,
  title: "Real-Time Road Surface Damage Detection",
  shortDescription:
    "AI system that detects potholes, cracks, and bumps from live video feed using deep learning.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["Computer Vision", "Deep Learning", "Road Safety"],

  problemStatement:
    "Road defects such as potholes and cracks significantly increase accident risk and vehicle damage. Manual inspection of roads is slow, infrequent, and prone to human error. There is a need for an automated, real-time system that can detect and classify road defects for smart city infrastructure and government maintenance planning.",

  abstract:
    "This project implements a deep-learning-based road inspection system that uses a camera feed from a dashboard camera or smartphone mounted on a vehicle. A convolutional neural network identifies road defects such as potholes, cracks, and uneven surfaces. Each detection is tagged with GPS coordinates and sent to a cloud dashboard for visualization. The system reduces manual effort and speeds up road maintenance by generating dynamic heatmaps of high-damage areas.",

  components: [
    "Raspberry Pi / Jetson Nano / Laptop",
    "USB/HD Camera Module",
    "GPS Module (NEO-6M)",
    "TensorFlow or PyTorch",
    "OpenCV",
    "Cloud dashboard (Firebase / Node.js / custom server)"
  ],

  blockDiagram: [
    "Camera Input",
    "Frame Preprocessing",
    "CNN Road Damage Detection",
    "Defect Classification",
    "GPS Tagging",
    "Cloud Dashboard Logging"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "Camera Input" -> "Preprocessing" -> "CNN Model" -> "Defect Classification" ->
  "GPS Tagging" -> "Cloud Dashboard";
}
`,

  working:
    "A camera mounted on a moving vehicle captures road frames continuously. The frames are resized, normalized, and passed to a trained CNN model capable of identifying potholes, cracks, or bumps. Whenever damage is detected, the system retrieves GPS coordinates from the GPS module and stores both the image and the location in the cloud database. A dashboard displays all detected defects on a map, enabling authorities to prioritize repairs.",

  applications: [
    "Smart city road monitoring",
    "Government road maintenance departments",
    "Fleet management companies",
    "Automated insurance claim assessment",
    "Research on road infrastructure quality"
  ]
}
,
{
  id: 41,
  title: "AI-Based Chronic Disease Risk Predictor",
  shortDescription:
    "Machine learning model predicts the risk of diseases such as diabetes, heart disease, and hypertension.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Medium",
  tags: ["Healthcare AI", "Prediction Models", "Data Science"],

  problemStatement:
    "Chronic diseases like diabetes and heart disease are rising globally. Early detection can significantly reduce complications, yet many patients undergo checkups infrequently. A system that can assess health risk using simple medical parameters would encourage preventive healthcare.",

  abstract:
    "This project builds a machine learning model that predicts disease risk levels using medical and lifestyle data. Popular algorithms such as Random Forest, XGBoost, and Logistic Regression are compared. A web dashboard allows users to enter data such as glucose level, BMI, blood pressure, and activity level. The model outputs a probability score indicating disease risk. The system can be integrated with hospital tools to assist doctors in early detection.",

  components: [
    "Python",
    "Pandas, NumPy, Scikit-Learn",
    "Medical Dataset (UCI Repository)",
    "Flask or FastAPI Web Backend",
    "React / HTML UI",
    "Cloud Deployment (optional)"
  ],

  blockDiagram: [
    "User Input Data",
    "Data Preprocessing",
    "Feature Engineering",
    "ML Model Training",
    "Risk Prediction Engine",
    "Dashboard Output"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];
  "User Data" -> "Preprocessing" -> "ML Model" -> "Risk Score" -> "Dashboard";
}
`,

  working:
    "Users enter medical and lifestyle information into the system. This data undergoes preprocessing steps such as normalization, missing value handling, and feature extraction. A trained ML model predicts the risk score of different diseases. The dashboard displays results with color-coded risk zones and suggestions for improvement. The system can also store historical data to show health trends over time.",

  applications: [
    "Hospitals and clinics",
    "Personal health monitoring apps",
    "Insurance companies",
    "Corporate employee wellness programs"
  ]
}
,
{
  id: 42,
  title: "AI Emotion Recognition for Mental Health Monitoring",
  shortDescription:
    "Detects user emotional states (happy, sad, stressed, neutral) using facial expression recognition.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["Emotion Detection", "Deep Learning", "Mental Health Analytics"],

  problemStatement:
    "Mental health issues are often difficult to detect early, especially when individuals do not regularly consult psychologists. Tracking emotional patterns throughout the day could reveal stress, depression, or anxiety trends before they become severe.",

  abstract:
    "This project uses a webcam or smartphone camera to capture facial expressions and classify them into emotional states using a CNN-based model. Emotions are logged over time, and analytics charts visualize weekly or monthly mood patterns. The system can optionally alert guardians or therapists if prolonged negative emotions are detected.",

  components: [
    "Camera (Webcam/Mobile)",
    "OpenCV",
    "TensorFlow/Keras",
    "Facial Expression Dataset (FER2013, RAF-DB)",
    "Local or Cloud Database",
    "Dashboard UI"
  ],

  blockDiagram: [
    "Face Capture",
    "Face Detection",
    "CNN Emotion Classifier",
    "Emotion Logging",
    "Analytics Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled"];
  "Face Capture" -> "Face Detection" -> "CNN Classifier" -> "Emotion Log" -> "Analytics Dashboard";
}
`,

  working:
    "The camera continuously captures video frames. OpenCV detects the face region, which is then passed to the CNN classifier. The predicted emotion is time-stamped and stored in a database. The dashboard displays emotional history through graphs and charts. Long-term stress patterns are easily identifiable.",

  applications: [
    "Therapists and psychologists",
    "Schools and colleges",
    "Workplace stress monitoring",
    "Personal well-being apps"
  ]
}
,
{
  id: 43,
  title: "AI Resume Screening & Skill Match System",
  shortDescription:
    "Automatically extracts skills from resumes and calculates job match percentage using NLP.",
  year: "3rd",
  domain: "AI/ML",
  difficulty: "Medium",
  tags: ["NLP", "Automation", "Recruitment"],

  problemStatement:
    "Recruiters manually screen hundreds of resumes, often missing good candidates due to fatigue or time constraints. There is a need for an automated system that can evaluate resumes quickly and consistently.",

  abstract:
    "The system extracts text from PDF resumes, identifies key skills, work experience, and educational details using NLP models, and compares them with job descriptions. A similarity score is calculated using BERT or TF-IDF. The UI displays candidate ranking, strengths, and missing skills.",

  components: [
    "Python",
    "spaCy / NLTK",
    "BERT / SentenceTransformers",
    "PDFMiner / PyMuPDF",
    "React or basic HTML UI"
  ],

  blockDiagram: [
    "Resume Upload",
    "Text Extraction",
    "Skill Extraction",
    "Similarity Matching",
    "Ranking Output"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Upload" -> "Text Extract" -> "NLP Skill Extractor" -> "Similarity Engine" -> "Ranking";
}
`,

  working:
    "The user uploads a PDF resume. Text is extracted and analyzed by NLP models to identify skills and experience. The job description is also processed. A similarity algorithm matches resume content to job requirements, producing a match score. Recruiters can view top candidates based on ranking.",

  applications: [
    "HR recruitment",
    "University placement cells",
    "Job portals",
    "Freelancer platforms"
  ]
}
,
{
  id: 44,
  title: "Food Quality Detection Using Deep Learning",
  shortDescription:
    "CNN model detects fresh vs spoiled fruits and vegetables using images.",
  year: "3rd",
  domain: "AI/ML",
  difficulty: "Medium",
  tags: ["Food Tech", "Image Processing", "Deep Learning"],

  problemStatement:
    "Food spoilage is a major problem in supermarkets and households. Visual inspection is inconsistent and often inaccurate.",

  abstract:
    "This project uses image classification to distinguish between fresh and spoiled produce. A dataset of fruits/vegetables is used to train a CNN model that identifies color changes, mold, and texture differences. The system can run on a Raspberry Pi to build a real-time food scanning station.",

  components: [
    "Camera Module",
    "TensorFlow/Keras",
    "Dataset of fresh/spoiled food images",
    "Raspberry Pi / Laptop",
    "Web or mobile UI"
  ],

  blockDiagram: [
    "Image Capture",
    "Preprocessing",
    "CNN Classification",
    "Quality Decision Output"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Camera" -> "Preprocessing" -> "CNN Model" -> "Fresh/Spoiled Label";
}
`,

  working:
    "User places food item in front of the camera. The system preprocesses the image and passes it through the CNN model, which classifies it as fresh or spoiled. The UI displays the result along with confidence score.",

  applications: [
    "Supermarkets",
    "Food quality labs",
    "Restaurants",
    "Smart kitchen devices"
  ]
}
,
{
  id: 45,
  title: "Autonomous Indoor Navigation Robot Using LIDAR-Based SLAM",
  shortDescription:
    "A robot capable of mapping indoor environments and navigating autonomously using LIDAR and SLAM algorithms.",
  year: "4th",
  domain: "Robotics",
  difficulty: "Hard",
  tags: ["SLAM", "Autonomous Navigation", "LIDAR", "Robotics"],

  problemStatement:
    "Navigating unknown indoor spaces autonomously is challenging due to the absence of GPS and dynamically changing environments. Traditional robots rely on pre-mapped environments, which limits flexibility. A robot capable of mapping and navigating in real time is essential for industrial automation and service robotics.",

  abstract:
    "This project implements an indoor autonomous navigation robot using LIDAR-based Simultaneous Localization and Mapping (SLAM). A Raspberry Pi or Jetson Nano collects LIDAR scans, builds a live map using SLAM algorithms, and calculates the robot's position. A path planning module identifies optimal routes while obstacle avoidance ensures safe travel. The robot can be deployed for industrial inspection, warehouse automation, and campus navigation.",

  components: [
    "LIDAR Module (RPLidar A1/A2)",
    "Raspberry Pi / Jetson Nano",
    "Motor Driver (L298N)",
    "DC Motors / Encoders",
    "Battery Pack",
    "ROS (Robot Operating System)"
  ],

  blockDiagram: [
    "LIDAR Sensor",
    "SLAM Algorithm",
    "Map Generation",
    "Path Planning",
    "Motor Control Unit",
    "Autonomous Movement"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled"];
  "LIDAR Sensor" -> "SLAM Algorithm" -> "Map Generation" -> "Path Planning" -> "Motor Control" -> "Robot Movement";
}
`,

  working:
    "The LIDAR continuously scans the area and sends distance measurements to the SLAM module. SLAM builds a map and simultaneously localizes the robot within it. The path planner computes the shortest obstacle-free path to the destination. The motor control unit adjusts wheel speeds to follow the generated path while avoiding dynamic obstacles.",

  applications: [
    "Warehouse robots",
    "Hospital delivery robots",
    "Campus indoor navigation",
    "Search and rescue operations",
    "Industrial inspection"
  ]
}
,
{
  id: 46,
  title: "Voice-Controlled Assistive Robot for Physically Disabled Users",
  shortDescription:
    "A robot that performs tasks such as movement, picking objects, or calling assistance through voice commands.",
  year: "3rd",
  domain: "Robotics",
  difficulty: "Medium",
  tags: ["Speech Recognition", "Assistive Technology", "Robotics"],

  problemStatement:
    "People with physical disabilities often rely on human caregivers for small tasks. Existing assistive devices are expensive and lack voice-based natural interaction. A low-cost, voice-controlled robot can empower disabled individuals to access better independence.",

  abstract:
    "The project creates a cost-effective assistive robot operated through voice commands. Speech recognition modules interpret commands such as 'move forward', 'stop', 'pick object', or 'call help'. These commands are processed by an ESP32 or Raspberry Pi, which controls motors or actuators. A wireless communication module enables caregivers to receive alerts when needed.",

  components: [
    "ESP32 / Raspberry Pi",
    "Microphone Module",
    "Speech Recognition API (Google Speech, Vosk)",
    "Motor Driver",
    "DC Motors",
    "Battery and Chassis"
  ],

  blockDiagram: [
    "Voice Input",
    "Speech Recognition Engine",
    "Command Interpreter",
    "Motor/Actuator Control",
    "Robot Action Execution"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Voice Input" -> "Speech Recognition" -> "Command Processing" -> "Motor Control" -> "Robot Action";
}
`,

  working:
    "The user gives a voice command which is processed by a speech engine (online or offline). The extracted command is mapped to specific robot actions. The robot executes tasks like movement, object picking, or sending alerts. The system ensures safety by stopping automatically when unknown commands are detected.",

  applications: [
    "Assistive robotics for disabled people",
    "Hospital patient support",
    "Home-care automation",
    "Voice-based personal robots"
  ]
}
,
{
  id: 47,
  title: "Fire-Fighting Robot with Thermal Image Detection",
  shortDescription:
    "An autonomous robot that detects hotspots using a thermal camera and extinguishes small fires.",
  year: "4th",
  domain: "Robotics",
  difficulty: "Hard",
  tags: ["Thermal Imaging", "Fire Detection", "Autonomous Robot"],

  problemStatement:
    "Fire accidents in industrial and residential buildings pose severe risks to firefighters. Detecting hotspots early and extinguishing small fires can prevent disasters. A robot that can detect fire using thermal imaging and navigate autonomously can significantly enhance safety.",

  abstract:
    "This robot uses a FLIR thermal camera to detect abnormal heat signatures in real time. Using thresholding and blob detection, the robot identifies potential fire hotspots. It navigates toward the source and activates a mini fire-extinguishing system such as CO₂ spray or water mist. A wireless alert is also sent to the control station.",

  components: [
    "FLIR Lepton Thermal Camera",
    "ESP32 / Raspberry Pi",
    "Motor Driver",
    "Fire Extinguisher Module (Pump/Solenoid)",
    "Chassis and Motors"
  ],

  blockDiagram: [
    "Thermal Camera Input",
    "Heat Detection Algorithm",
    "Navigation Module",
    "Extinguishing Mechanism",
    "Alert System"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Thermal Camera" -> "Heat Detection" -> "Navigation" -> "Extinguish System" -> "Alert";
}
`,

  working:
    "The thermal camera identifies hotspots above a threshold. The robot's navigation module computes a movement path. Upon reaching the hotspot, it activates the extinguisher and simultaneously sends an alert to the user. This enables unmanned early-stage fire response.",

  applications: [
    "Warehouses",
    "Chemical industries",
    "Household fire prevention",
    "Automated firefighting systems"
  ]
}
,
{
  id: 48,
  title: "Self-Balancing Two-Wheel Robot Using PID & IMU",
  shortDescription:
    "A two-wheeled inverted pendulum robot that balances itself using a PID controller and IMU sensor.",
  year: "3rd",
  domain: "Robotics",
  difficulty: "Hard",
  tags: ["PID Control", "IMU Sensors", "Balancing Robot"],

  problemStatement:
    "Balancing an inverted pendulum is a classical problem in control systems engineering. Creating a stable two-wheel robot is challenging due to continuous corrections required to maintain balance.",

  abstract:
    "This robot uses an MPU6050 IMU to measure angular tilt. The data is filtered using a complementary or Kalman filter. A PID controller calculates the required motor speed to counteract tilt in the opposite direction. The system remains upright and can move forward/backward without falling.",

  components: [
    "MPU6050 IMU Sensor",
    "Arduino / ESP32",
    "Motor Driver (L298N)",
    "DC Motors",
    "Battery Pack"
  ],

  blockDiagram: [
    "IMU Sensor",
    "Angle Estimation Filter",
    "PID Controller",
    "Motor Driver",
    "Balancing Action"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "IMU" -> "Filtering" -> "PID Controller" -> "Motor Driver" -> "Balancing Action";
}
`,

  working:
    "IMU measures tilt → angle estimated → PID calculates correction → motor driver adjusts wheel speed to stabilize the robot. Continuous feedback maintains balance.",

  applications: [
    "Control system research",
    "Robotics competitions",
    "Segway-like personal transport systems"
  ]
}
,
{
  id: 49,
  title: "GPS-Guided Agricultural Seeding Robot",
  shortDescription:
    "A smart robot that plants seeds at accurate intervals using GPS navigation.",
  year: "4th",
  domain: "Robotics",
  difficulty: "Medium",
  tags: ["Agriculture", "Automation", "GPS"],

  problemStatement:
    "Farmers often face challenges in maintaining equal spacing and depth while planting seeds manually. This affects crop growth and yield. A robot that autonomously plants seeds at uniform distances can improve agricultural efficiency.",

  abstract:
    "The robot uses GPS positioning to navigate a farm plot in straight lines. A seed dispensing mechanism releases seeds at programmed intervals. The robot adjusts direction using compass and motor feedback. This system improves precision agriculture practices.",

  components: [
    "GPS Module (NEO-6M)",
    "Compass Module (HMC5883L)",
    "ESP32 / Arduino",
    "Seed Dispenser (Servo-controlled)",
    "Chassis and Motors"
  ],

  blockDiagram: [
    "GPS Input",
    "Path Control Unit",
    "Speed & Direction Control",
    "Seed Dispensing System",
    "Field Coverage"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "GPS" -> "Path Control" -> "Motor Control" -> "Seed Dispenser" -> "Coverage";
}
`,

  working:
    "The GPS module provides the robot’s position. The robot follows predefined lanes. At fixed distances, a servo rotates to release seeds. The robot continues until the plot is fully covered.",

  applications: [
    "Precision farming",
    "Seed planting automation",
    "Large-scale agriculture",
    "Smart farming research"
  ]
}
,
{
  id: 50,
  title: "IoT-Based Structural Health Monitoring System",
  shortDescription:
    "Monitors vibrations and structural stresses in buildings or bridges using distributed sensor nodes and an IoT dashboard.",
  year: "4th",
  domain: "IoT",
  difficulty: "Hard",
  tags: ["Vibration Sensor", "Strain Gauge", "LoRa", "Structural Health"],

  problemStatement:
    "Many buildings, bridges and industrial structures undergo gradual wear and damage due to aging, overloading or environmental factors. Traditional inspection methods are manual and infrequent, which means early warning signs of failure can be missed. A continuous, low-cost structural health monitoring system is needed to detect abnormal vibrations or stresses before catastrophic failure occurs.",

  abstract:
    "This project implements a distributed IoT-based structural health monitoring system. Multiple sensor nodes installed at critical points on a structure measure vibration levels and strains using accelerometers and strain gauges. Each node uses a microcontroller to preprocess data and transmit it wirelessly via LoRa or Wi-Fi to a central gateway. A cloud or local dashboard visualizes real-time vibration signatures, stress trends and alerts when readings cross safety thresholds. The system can be deployed on bridges, buildings or towers to aid engineers in maintenance planning and safety assessment.",

  components: [
    "Microcontroller node (ESP32 / ESP8266 / Arduino + LoRa)",
    "3-axis accelerometer (e.g. ADXL345)",
    "Strain gauge with signal conditioning amplifier",
    "LoRa transceiver modules or Wi-Fi router",
    "Central gateway (Raspberry Pi / ESP32)",
    "Cloud server or local PC dashboard",
    "Power supply and mounting hardware"
  ],

  blockDiagram: [
    "Vibration & Strain Sensors",
    "Sensor Node Microcontroller",
    "Wireless Link (LoRa / Wi-Fi)",
    "Central Gateway",
    "Cloud / Local Server",
    "Monitoring & Alert Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Vibration & Strain Sensors" -> "Sensor Node Microcontroller" ->
  "Wireless Link (LoRa / Wi-Fi)" -> "Central Gateway" ->
  "Cloud / Local Server" -> "Monitoring & Alert Dashboard";
}
`,

  working:
    "Accelerometers and strain gauges mounted on the structure sense vibration and deformation. Each sensor node samples these signals at regular intervals, filters noise and computes basic features such as RMS vibration, peak acceleration or strain percentage. The processed data is sent to the central gateway over LoRa or Wi-Fi. The gateway aggregates readings from all nodes and uploads them to a server, where a dashboard plots time series, trends and heatmaps of stress hotspots. Threshold logic or simple ML models can flag abnormal vibrations or sudden changes, generating alerts via email, SMS or on-screen notifications.",

  applications: [
    "Bridge and flyover structural monitoring",
    "High-rise building health assessment",
    "Industrial plant structure monitoring",
    "Research projects in civil and structural engineering",
    "Smart city infrastructure management"
  ]
},
{
  id: 51,
  title: "Smart Home Energy Optimization Using IoT and Simple AI",
  shortDescription:
    "Learns appliance usage patterns and controls smart plugs and lighting to reduce energy wastage.",
  year: "3rd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Smart Plug", "Energy Monitoring", "Automation", "ML"],

  problemStatement:
    "In many homes, appliances like lights, fans, air conditioners and heaters are left ON unnecessarily due to human forgetfulness. This leads to higher electricity bills and energy wastage. Conventional timers are not adaptive and do not learn user habits. A smart system is needed that monitors power usage and automatically optimizes appliance operation based on learned patterns.",

  abstract:
    "This project builds a smart home energy optimization system using IoT-enabled smart plugs and basic machine learning. Each major appliance is connected through a smart plug that measures power consumption and provides ON/OFF control via Wi-Fi. An ESP32 or similar controller logs usage data to a cloud platform. A simple AI model learns patterns like typical usage times and durations, and suggests or automatically executes energy-saving actions such as turning OFF idle devices or scheduling loads during off-peak hours. The user interacts through a web or mobile dashboard.",

  components: [
    "ESP32 / NodeMCU-based smart plugs with relay and current sensor",
    "Current sensor modules (ACS712 / HLW8012 etc.)",
    "Wi-Fi router",
    "Cloud IoT platform (ThingsBoard, Firebase or custom server)",
    "Web or mobile dashboard (React / Flutter / simple web UI)",
    "Optional voice assistant integration (Alexa / Google Assistant)"
  ],

  blockDiagram: [
    "Appliances via Smart Plugs",
    "Energy Sensing & ESP32 Nodes",
    "Wi-Fi Network",
    "Cloud Server & Database",
    "AI-based Usage Pattern Analyzer",
    "User Dashboard & Control"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Appliances via Smart Plugs" -> "ESP32 Smart Plug Node" ->
  "Wi-Fi Network" -> "Cloud Server & Database" ->
  "AI Usage Pattern Analyzer" -> "User Dashboard & Control";
}
`,

  working:
    "Each smart plug measures real-time power consumption and reports it to the cloud via MQTT or HTTP. The server stores timestamped readings per appliance. A background script analyzes historical data to detect daily and weekly patterns, such as appliances that remain ON during unoccupied periods. The system then recommends schedules or automatically turns off devices when they are detected as idle beyond a certain threshold. Users can override actions using the dashboard. Over time, the model improves its understanding of user behavior and becomes more accurate in optimization.",

  applications: [
    "Smart home energy management",
    "Hostel room and lab power optimization",
    "Office energy saving systems",
    "Educational demo of IoT + AI integration"
  ]
},
{
  id: 52,
  title: "Industrial Worker Heat-Stress Monitoring System",
  shortDescription:
    "Wearable and ambient sensors monitor worker heat stress and send alerts when unsafe conditions occur.",
  year: "3rd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Wearable", "Industrial Safety", "Environment Monitoring"],

  problemStatement:
    "Workers in foundries, boiler rooms, mines and construction sites often operate in high-temperature environments. Prolonged heat exposure can cause fatigue, dehydration, heat stroke or even death. Traditional monitoring is manual and may not detect risk in time. A continuous, sensor-based heat-stress monitoring solution is required to protect workers.",

  abstract:
    "This project implements an IoT-based heat-stress monitoring system using a combination of wearable sensors and ambient environment sensors. A wearable unit worn by the worker measures body temperature and heart rate, while fixed nodes measure ambient temperature and humidity to compute Heat Index or WBGT (Wet Bulb Globe Temperature). An ESP32 or similar controller sends data to a central dashboard. If readings indicate dangerous heat stress, the system sends alerts to supervisors and the worker via buzzer or vibration.",

  components: [
    "ESP32 or ESP8266 microcontroller",
    "Body temperature sensor (e.g. DS18B20 or skin-contact sensor)",
    "Heart rate sensor module (e.g. pulse sensor or MAX30100)",
    "Ambient temperature and humidity sensor (DHT22 / SHT31)",
    "Vibration motor / buzzer for local alert",
    "Wi-Fi access point or gateway",
    "Web or mobile dashboard for supervisors"
  ],

  blockDiagram: [
    "Wearable Sensors (Body Temp, Heart Rate)",
    "Ambient Sensors (Temp, Humidity)",
    "ESP32 Node on Worker",
    "Wireless Communication",
    "Central Monitoring Server",
    "Alerts to Supervisors & Worker"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Wearable Sensors" -> "ESP32 Worker Node";
  "Ambient Sensors" -> "ESP32 Worker Node";
  "ESP32 Worker Node" -> "Wireless Communication" -> "Central Monitoring Server" -> "Alerts";
}
`,

  working:
    "The wearable node periodically measures the worker’s body temperature and heart rate. At the same time, ambient nodes or the same device measure environmental temperature and humidity. From these values, a heat stress index is computed. The data is sent to a central server in real time. If the index exceeds safe limits or if the worker’s heart rate indicates overexertion, the system triggers local alerts on the wearable and sends notifications to supervisors so that rest or rotation can be arranged.",

  applications: [
    "Industrial safety in factories and foundries",
    "Construction sites and mining operations",
    "Refineries, power plants and boiler rooms",
    "Occupational health and safety research"
  ]
},
{
  id: 53,
  title: "LoRa-Based Smart Village Communication and Sensing Network",
  shortDescription:
    "Long-range, low-power wireless network for village-wide sensor data collection and basic messaging.",
  year: "4th",
  domain: "Communication",
  difficulty: "Hard",
  tags: ["LoRaWAN", "Rural IoT", "Long-Range Communication"],

  problemStatement:
    "Many rural and remote areas lack reliable internet connectivity and communication infrastructure. Monitoring water levels, weather, soil moisture or sending village alerts becomes difficult. Cellular networks may be weak or expensive. A low-power long-range communication system is needed to connect sensors and simple message services across a village.",

  abstract:
    "This project designs a LoRa-based communication network for a model smart village. Multiple sensor nodes deployed at water tanks, farms and weather stations use LoRa radios to send data to a central gateway. The gateway, which may have intermittent internet, uploads data to the cloud when available or shows it locally. The same network can also relay simple text alerts between nodes, providing a basic communication channel for remote villages.",

  components: [
    "LoRa transceiver modules (SX1278 / RFM95W)",
    "Sensor nodes with Arduino / ESP32",
    "Gateway (Raspberry Pi / ESP32 + LoRa + Wi-Fi)",
    "Sensors (water level, soil moisture, temperature, humidity)",
    "Power supply or solar panels for remote nodes",
    "Cloud dashboard or local HMI display"
  ],

  blockDiagram: [
    "Distributed Sensor Nodes",
    "LoRa Uplink Communication",
    "Central LoRa Gateway",
    "Optional Internet / Cloud Server",
    "Village Monitoring Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Sensor Node 1" -> "LoRa Channel" -> "Central Gateway";
  "Sensor Node 2" -> "LoRa Channel" -> "Central Gateway";
  "Sensor Node 3" -> "LoRa Channel" -> "Central Gateway";
  "Central Gateway" -> "Cloud Server / Local Display";
}
`,

  working:
    "Each node periodically reads its attached sensor (for example, water level at a tank, soil moisture in a farm, or weather parameters). The node packages the data into a small LoRa packet and transmits it at a defined interval. The central gateway listens on the same frequency and bandwidth, decodes packets from all nodes, and forwards data either to a local display (for offline scenarios) or to a cloud server when internet access is available. The dashboard consolidates the data and can generate SMS or speaker-based alerts for critical events such as low water level or extreme weather.",

  applications: [
    "Smart village water and agriculture monitoring",
    "Rural environmental data collection",
    "Disaster early warning systems",
    "Educational projects on LPWAN (Low Power Wide Area Networks)"
  ]
},
{
  id: 54,
  title: "Intelligent Traffic Violation Detection Using Cameras and ML",
  shortDescription:
    "Detects traffic violations such as helmet-less riding, triple riding or red-light jumping using computer vision.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["Traffic Monitoring", "Object Detection", "Smart City"],

  problemStatement:
    "Manual enforcement of traffic rules at busy junctions is difficult and resource-intensive. Many violations such as not wearing helmets, triple riding, and crossing red lights go unnoticed, leading to accidents and poor road discipline. There is a need for an automatic system that can detect and record such violations using cameras and AI.",

  abstract:
    "This project develops a computer vision-based traffic violation detection system. CCTV or roadside cameras capture live video of road junctions. Object detection models such as YOLO or SSD identify vehicles and riders. Additional logic checks for helmets on two-wheeler riders, counts number of riders per bike, and correlates vehicle movement with traffic signal phase to detect red-light jumping. Evidence snapshots and timestamps are stored in a database and can be linked with vehicle registration numbers.",

  components: [
    "High-resolution CCTV / IP camera",
    "Edge processing unit (GPU PC / Jetson Nano)",
    "Deep learning framework (PyTorch / TensorFlow)",
    "Pretrained object detection model (YOLO, SSD etc.)",
    "Database and backend server",
    "Web dashboard for viewing violations"
  ],

  blockDiagram: [
    "Live Traffic Video Feed",
    "Frame Extraction & Preprocessing",
    "Object & Rider Detection (YOLO/SSD)",
    "Violation Logic (Helmet / Triple / Red Light)",
    "Evidence Storage & Database",
    "Police / Authority Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Traffic Camera Feed" -> "Frame Preprocessing" ->
  "Object & Rider Detection (YOLO/SSD)" ->
  "Violation Detection Logic" ->
  "Evidence Storage (DB)" ->
  "Authority Dashboard";
}
`,

  working:
    "The camera provides a continuous video stream of a road junction. Frames are captured at a suitable rate and fed into a deep-learning-based object detection model that identifies vehicles, riders and helmets. For two-wheelers, the system checks whether each detected rider is wearing a helmet and whether the number of riders exceeds allowed limits. By synchronizing with traffic signal status or using virtual stop-line detection, the system also detects vehicles that cross the stop line during a red signal. For each violation, the system stores cropped images, time, lane information and vehicle region to a database for review by authorities.",

  applications: [
    "Traffic police enforcement systems",
    "Smart city integrated command centers",
    "Road safety analytics and research",
    "Automated e-challan generation platforms"
  ]
}
,
{
  id: 55,
  title: "AI-Based Intrusion Detection System for IoT Networks",
  shortDescription:
    "Machine learning–based intrusion detection system that analyzes IoT network traffic and flags malicious activity.",
  year: "4th",
  domain: "Cybersecurity",
  difficulty: "Hard",
  tags: ["Network Security", "Intrusion Detection", "Machine Learning", "IoT"],

  problemStatement:
    "IoT devices are often deployed with weak security and limited processing power, making them easy targets for attackers. Traditional firewalls and rule-based intrusion detection systems may not detect new or evolving attack patterns. There is a need for a lightweight, intelligent intrusion detection system that can analyze IoT network traffic and detect anomalies or attacks in real time.",

  abstract:
    "This project designs and implements an AI-based Intrusion Detection System (IDS) for IoT environments. Network traffic data such as packet size, protocol type, port usage and connection frequency is collected and transformed into feature vectors. Machine learning models like Random Forest, XGBoost, or Neural Networks are trained on labeled normal and attack traffic datasets (e.g., DoS, port scanning, botnet activity). During deployment, the trained model classifies incoming traffic as normal or suspicious and raises alerts when malicious behavior is detected. A dashboard displays real-time statistics and detected intrusion events.",

  components: [
    "PC or server for training and inference",
    "Packet capture tool (Wireshark / tcpdump / custom sniffer)",
    "Python with Scikit-Learn / PyTorch / TensorFlow",
    "IoT network traffic dataset (e.g., Bot-IoT, UNSW-NB15, CIC-IDS)",
    "Local database or log files for event storage",
    "Web dashboard (Flask / Django / React)"
  ],

  blockDiagram: [
    "IoT Devices & Gateways",
    "Traffic Capture & Feature Extraction",
    "Trained ML Intrusion Detection Model",
    "Attack / Normal Classification",
    "Alert Generation & Logging",
    "Security Monitoring Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "IoT Devices & Gateways" -> "Traffic Capture & Feature Extraction" ->
  "ML Intrusion Detection Model" -> "Attack / Normal Classification" ->
  "Alert Generation & Logging" -> "Monitoring Dashboard";
}
`,

  working:
    "Network traffic from IoT devices and gateways is mirrored or captured at a monitoring node. A feature extraction module converts raw packets into numerical features such as connection duration, protocol, flag counts and packet statistics. These features are fed into a trained ML model which outputs a classification for each flow: normal or one of several attack types. If malicious activity is detected, the system logs the event with timestamp, source/destination IP and attack type, and raises an alert on the dashboard. Optionally, the IDS can signal a firewall or SDN controller to block the suspicious source automatically.",

  applications: [
    "Security monitoring for smart homes and smart campuses",
    "Industrial IoT networks in factories and plants",
    "Testbed for research on anomaly detection in IoT",
    "Educational platform for cybersecurity and ML integration"
  ]
},
{
  id: 56,
  title: "Blockchain-Based Academic Certificate Verification System",
  shortDescription:
    "Secure academic certificate storage and verification using blockchain and tamper-proof digital records.",
  year: "4th",
  domain: "Blockchain",
  difficulty: "Hard",
  tags: ["Blockchain", "Smart Contracts", "Certificate Verification"],

  problemStatement:
    "Fake academic certificates are a growing issue, causing trust problems for employers, universities and government agencies. Traditional verification methods are manual, slow and sometimes unreliable. There is a need for a secure, tamper-proof system that allows instant verification of certificate authenticity.",

  abstract:
    "This project implements a blockchain-based certificate verification platform where educational institutions issue digital certificates that are cryptographically linked to transactions on a blockchain. Each certificate’s hash is stored in a smart contract. Employers and third parties can verify the authenticity of a certificate by comparing its hash with the on-chain record. The system ensures that once issued, certificate records cannot be modified or forged without detection.",

  components: [
    "Public or private blockchain platform (Ethereum / Polygon testnet / Hyperledger Fabric)",
    "Smart contract written in Solidity (for EVM chains)",
    "Web3-enabled frontend (React / Next.js with ethers.js or web3.js)",
    "IPFS or secure file storage for certificate PDFs (optional)",
    "Institution admin portal for issuing certificates",
    "Verifier portal for checking certificates"
  ],

  blockDiagram: [
    "Institution Admin (Issue Certificate)",
    "Certificate Data & Hash Generation",
    "Smart Contract on Blockchain",
    "On-Chain Certificate Record",
    "Verifier Request with Certificate Hash",
    "Verification Response (Valid / Invalid)"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Institution Admin" -> "Certificate Hash Generation" ->
  "Smart Contract (Blockchain)" -> "On-Chain Record";

  "Verifier" -> "Submit Certificate Hash" ->
  "Smart Contract (Blockchain)" -> "Verification Result";
}
`,

  working:
    "When a student graduates, the institution generates a digital certificate (PDF or structured data) and computes its cryptographic hash (e.g., SHA-256). The hash, along with metadata such as student ID, course, CGPA and passing year, is stored in a smart contract transaction on the blockchain. The actual certificate file may be stored in IPFS or the institution’s secure storage. When an employer or verifier wants to check a certificate, they upload or scan the document to recompute the hash and query the smart contract. If the hash matches an existing on-chain record and the issuer details are valid, the certificate is authentic. Any tampering with the document results in a mismatched hash and failed verification.",

  applications: [
    "Universities and colleges issuing digital degrees",
    "Recruiters verifying candidate qualifications",
    "Government scholarship and admission verification",
    "Professional certification bodies and training institutes"
  ]
},
{
  id: 57,
  title: "Decentralized E-Voting System Using Blockchain",
  shortDescription:
    "Secure, transparent and tamper-resistant electronic voting system built on blockchain.",
  year: "4th",
  domain: "Blockchain",
  difficulty: "Hard",
  tags: ["E-Voting", "Blockchain", "Security", "Smart Contracts"],

  problemStatement:
    "Traditional voting systems, whether paper-based or electronic, can suffer from issues such as fraud, tampering, lack of transparency and centralization of control. There is a need for a secure, verifiable and transparent e-voting system that preserves voter privacy and provides publicly auditable election results.",

  abstract:
    "This project develops a decentralized e-voting platform using blockchain technology. Voters are registered and assigned unique identities or cryptographic keys. During the election, each vote is cast as a transaction to a smart contract. The blockchain’s immutability ensures that once cast, votes cannot be altered or deleted. Tallying is done by reading the public ledger, while preserving voter anonymity through appropriate design. A web-based interface allows voters to cast their votes and view aggregated results securely.",

  components: [
    "Blockchain platform (Ethereum / private chain)",
    "Smart contract for managing candidates, votes and tallying",
    "Web frontend with Web3 wallet integration (Metamask etc.)",
    "Voter registration and authentication module",
    "Admin panel for configuring elections",
    "Optional off-chain database for user management"
  ],

  blockDiagram: [
    "Voter Registration & ID Management",
    "Smart Contract Deployment (Candidates, Rules)",
    "Vote Casting via Web DApp",
    "Blockchain Ledger (Immutable Vote Storage)",
    "Result Tallying from Smart Contract",
    "Public Result Viewing & Audit"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Voter Registration" -> "Smart Contract Setup";
  "Smart Contract Setup" -> "Voting DApp Interface";
  "Voter" -> "Voting DApp Interface" -> "Blockchain Ledger";
  "Blockchain Ledger" -> "Result Tallying" -> "Public Result Display";
}
`,

  working:
    "Before the election, an admin deploys a voting smart contract with a list of candidates and election rules. Eligible voters are registered and associated with blockchain addresses or keys. During the voting phase, each voter connects to the DApp, selects a candidate and sends a signed transaction to the smart contract. The contract records the vote while enforcing constraints (e.g., one vote per address). After voting ends, anyone can call a tally function or read the contract’s state to compute vote counts. Transparency is ensured because all vote transactions are on-chain, yet voter identity can be kept pseudonymous or hidden using appropriate design.",

  applications: [
    "Student union and club elections",
    "Corporate board or shareholder voting",
    "Local community or housing society decisions",
    "Prototype for large-scale government e-voting"
  ]
},
{
  id: 58,
  title: "Smart Medication Reminder and Automatic Pill Dispenser",
  shortDescription:
    "IoT-enabled pill dispenser that releases doses at scheduled times and reminds patients through sound and mobile notifications.",
  year: "2nd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Healthcare", "Automation", "Reminder System"],

  problemStatement:
    "Elderly patients or those on long-term medication may forget to take pills at the correct time or take the wrong dosage. This can reduce treatment effectiveness or cause overdose. Family members and caregivers may not always be present to remind them. An automated system is required to dispense correct doses on time and notify both the patient and caregivers.",

  abstract:
    "This project builds a smart medication dispenser that stores tablets in multiple compartments and releases the correct dose at preprogrammed times. An RTC (Real-Time Clock) module keeps track of time. When it is time for a specific dose, the microcontroller rotates a carousel or opens a compartment using a servo motor, triggers a buzzer and optionally sends a notification via Wi-Fi or SMS. Missed doses can be logged, and caregivers can remotely monitor adherence through a simple app or dashboard.",

  components: [
    "Microcontroller (ESP32 / Arduino + Wi-Fi module)",
    "RTC module (DS3231 / DS1307)",
    "Servo motor or stepper motor with pill carousel mechanism",
    "Buzzer and status LEDs",
    "Push buttons for user acknowledgement",
    "Wi-Fi connectivity or GSM module (optional)",
    "Mobile app or web dashboard (optional)"
  ],

  blockDiagram: [
    "Medication Schedule (Stored in MCU)",
    "Real-Time Clock (RTC)",
    "Microcontroller Logic",
    "Pill Dispensing Mechanism (Servo/Stepper)",
    "Local Alert (Buzzer/LED)",
    "Remote Notification (App / SMS)"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Medication Schedule" -> "Microcontroller Logic";
  "Real-Time Clock (RTC)" -> "Microcontroller Logic";
  "Microcontroller Logic" -> "Pill Dispensing Mechanism";
  "Microcontroller Logic" -> "Local Alert (Buzzer/LED)";
  "Microcontroller Logic" -> "Remote Notification (App / SMS)";
}
`,

  working:
    "The caregiver or patient programs the medication schedule (times and compartments) into the device. The RTC keeps accurate time and periodically updates the microcontroller. When the current time matches a scheduled dose, the controller rotates a pill carousel or opens a compartment using a servo or stepper motor, making the pills accessible. A buzzer and LED are activated to alert the patient. If configured, the device also sends a notification to a mobile app or via SMS. The patient can press an acknowledgement button after taking the dose; if no acknowledgement is received within a set window, the system logs a missed dose and may escalate the alert to caregivers.",

  applications: [
    "Elderly care and home healthcare",
    "Chronic disease medication adherence",
    "Hospitals and nursing homes",
    "Telemedicine and remote patient monitoring setups"
  ]
},
{
  id: 59,
  title: "Fall Detection Wearable Device for Elderly and Patients",
  shortDescription:
    "Wearable IMU-based device that detects falls using ML or rule-based logic and sends alerts to caregivers.",
  year: "3rd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Wearable Device", "Fall Detection", "IMU Sensor", "Healthcare"],

  problemStatement:
    "Elderly individuals and certain patients are at high risk of falling. If a fall happens when they are alone, help may be delayed, leading to serious injury or even death. A small, always-on wearable device that automatically detects falls and alerts caregivers can significantly improve safety and response time.",

  abstract:
    "This project develops a compact wearable fall detection device using an accelerometer/gyroscope IMU sensor and a microcontroller with wireless connectivity. The device monitors acceleration and orientation patterns. Sudden impacts followed by inactivity are classified as falls using threshold-based rules or a trained ML model. On detecting a fall, the device triggers a buzzer or vibration to check if the user cancels the alert; if not cancelled within a short period, it sends an emergency alert (SMS, call, or app notification) with the user’s location to caregivers.",

  components: [
    "IMU sensor (e.g. MPU6050 / MPU9250)",
    "Microcontroller with BLE/Wi-Fi (ESP32 / nRF52)",
    "Battery and charging circuit (Li-ion/LiPo + charger)",
    "Buzzer or vibration motor",
    "Push button for cancel/confirm",
    "Mobile app or web service for alerts",
    "Optional GPS module for location"
  ],

  blockDiagram: [
    "IMU Sensor (Acceleration & Orientation)",
    "Signal Processing / Feature Extraction",
    "Fall Detection Logic / ML Model",
    "User Confirmation (Button / Buzzer)",
    "Alert Transmission (BLE / Wi-Fi / GSM)",
    "Caregiver Device / Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "IMU Sensor" -> "Feature Extraction" -> "Fall Detection Logic" ->
  "User Confirmation" -> "Alert Transmission" -> "Caregiver / App";
}
`,

  working:
    "The wearable continuously samples acceleration and angular velocity from the IMU sensor. A signal processing module computes features like resultant acceleration magnitude, orientation change and impact peaks. If a strong impact followed by low motion is detected, the system assumes a potential fall. It triggers a buzzer or vibration to alert the user and starts a short countdown. If the user presses the button to cancel, the event is discarded as a false trigger. If not cancelled, the device sends an alert containing the event time and optionally location information to a paired smartphone or cloud service, which then notifies caregivers.",

  applications: [
    "Home monitoring of elderly or high-risk patients",
    "Hospitals and rehabilitation centers",
    "Workplace safety in high-risk environments",
    "Assistive living and telehealth systems"
  ]
}
,
{
  id: 60,
  title: "ECG Arrhythmia Detection System Using AI",
  shortDescription:
    "Analyzes ECG signals in real time and detects arrhythmias using signal processing and deep learning models.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["ECG", "Signal Processing", "Deep Learning", "Healthcare"],

  problemStatement:
    "Electrocardiogram (ECG) signals are commonly used to diagnose heart conditions, but interpreting ECG waveforms requires trained cardiologists. In many areas, there is limited access to specialists, which delays diagnosis. An automated arrhythmia detection system can help flag abnormal patterns early and assist clinicians in decision making.",

  abstract:
    "This project focuses on designing an automated ECG analysis system that detects arrhythmias using AI. Raw ECG signals are collected from a sensor module or public datasets and preprocessed with filtering and segmentation. Features such as R-R intervals, QRS width and morphology are extracted, or the raw segments are fed directly into a 1D-CNN or LSTM-based deep learning model. The model classifies beats as normal or one of several arrhythmia types (e.g., PVC, AFib). A simple user interface displays ECG plots and classification results, enabling real-time or offline analysis in clinical or remote health setups.",

  components: [
    "ECG sensor module with electrodes (AD8232 or similar)",
    "Microcontroller or data acquisition device",
    "Laptop/PC with Python for processing",
    "Python libraries: NumPy, SciPy, Scikit-Learn, TensorFlow/PyTorch",
    "ECG datasets (e.g. MIT-BIH Arrhythmia Database)",
    "Simple GUI (Tkinter, PyQt, or web dashboard)"
  ],

  blockDiagram: [
    "ECG Signal Acquisition",
    "Preprocessing & Noise Filtering",
    "Segmentation & Feature Extraction",
    "Arrhythmia Classification Model",
    "Result Visualization & Alerts"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "ECG Signal Acquisition" ->
  "Preprocessing & Noise Filtering" ->
  "Segmentation & Feature Extraction" ->
  "Arrhythmia Classification Model" ->
  "Result Visualization & Alerts";
}
`,

  working:
    "The ECG sensor picks up electrical activity of the heart and sends an analog signal to a microcontroller or data acquisition board, which forwards digitized samples to a PC. A preprocessing stage removes baseline wander and high-frequency noise using filters. The cleaned signal is segmented into heartbeats based on R-peaks. Either hand-crafted features are computed or small windows of the signal are passed into a trained ML/DL model. The classifier outputs the beat type or arrhythmia category. The UI shows live or recorded ECG signals and highlights abnormal beats, optionally raising an alert when potentially dangerous arrhythmias are detected.",

  applications: [
    "Clinical decision support tools",
    "Remote cardiac monitoring systems",
    "Wearable ECG analysis prototypes",
    "Academic research in biomedical signal processing"
  ]
},
{
  id: 61,
  title: "AI-Based Eye Disease Detection from Fundus Images",
  shortDescription:
    "Uses deep learning on retinal fundus images to detect diseases such as diabetic retinopathy or glaucoma.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["Medical Imaging", "CNN", "Ophthalmology", "Healthcare AI"],

  problemStatement:
    "Eye diseases like diabetic retinopathy and glaucoma can lead to permanent vision loss if not detected early. Many patients, especially in rural areas, do not have access to frequent eye screenings. Automating the initial screening of fundus images can help identify at-risk patients and reduce the load on ophthalmologists.",

  abstract:
    "This project aims to build a deep learning–based screening system that can classify retinal fundus images as healthy or diseased. Using publicly available datasets of labeled eye images, a convolutional neural network is trained to detect signs of diabetic retinopathy or other abnormalities such as hemorrhages and exudates. A preprocessing pipeline enhances contrast and normalizes images. A simple web interface allows uploading fundus images and returns a risk level or disease class, making it a potential tool for tele-ophthalmology.",

  components: [
    "Dataset of retinal fundus images (e.g., Kaggle DR, Messidor)",
    "Python with TensorFlow/Keras or PyTorch",
    "OpenCV for image preprocessing",
    "GPU-enabled PC or cloud instance (optional but recommended)",
    "Web UI (Flask / Django / React frontend)"
  ],

  blockDiagram: [
    "Fundus Image Input",
    "Preprocessing & Normalization",
    "CNN-Based Feature Extraction",
    "Disease Classification",
    "Report & Risk Visualization"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Fundus Image Input" ->
  "Preprocessing & Normalization" ->
  "CNN Feature Extraction" ->
  "Disease Classification" ->
  "Report & Risk Visualization";
}
`,

  working:
    "The user or technician uploads a retinal image captured by a fundus camera. The system resizes, normalizes and enhances the image to improve contrast. The processed image is passed through a trained CNN which outputs probabilities for different disease classes or severity levels. Based on thresholds, the system flags images that need urgent review and displays a simple report to the user, which can be shared with ophthalmologists for confirmation.",

  applications: [
    "Telemedicine and remote eye screening camps",
    "Primary health centers with limited specialist availability",
    "Hospital pre-screening tools",
    "Research in medical image analysis"
  ]
},
{
  id: 62,
  title: "Neonatal Incubator IoT Vital Monitoring System",
  shortDescription:
    "Monitors newborn vital parameters and incubator conditions using IoT sensors with real-time alerts.",
  year: "3rd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Neonatal Care", "Vital Monitoring", "IoT", "Healthcare"],

  problemStatement:
    "Premature and critically ill newborns often require incubator care, where temperature, humidity and vital signs must be tightly controlled. In busy neonatal ICUs, nurses may not always be able to continuously monitor every incubator. A real-time IoT-based monitoring and alerting solution can improve safety and response time.",

  abstract:
    "This project develops an IoT-enabled incubator monitoring system that tracks vital parameters such as body temperature and movement as well as incubator environmental conditions including air temperature, humidity and oxygen level (optional). Sensors send data to a microcontroller which forwards it to a central dashboard over Wi-Fi. If any parameter goes outside safe ranges, alarms are triggered at the incubator and notifications are sent to nurses’ stations or mobile apps. Historical trends can also be visualized for clinical analysis.",

  components: [
    "Microcontroller (ESP32 / ESP8266)",
    "Body temperature sensor (skin/contact sensor or patch)",
    "Ambient temperature and humidity sensor (DHT22 / SHT31)",
    "Optional oxygen / CO₂ sensor module",
    "Buzzer and indicator LEDs",
    "Wi-Fi networking",
    "Local or cloud dashboard for nurses (web or app)"
  ],

  blockDiagram: [
    "Infant Vital Sensors",
    "Incubator Environment Sensors",
    "ESP32 Data Acquisition",
    "Wi-Fi / MQTT Communication",
    "Central Monitoring Dashboard",
    "Local & Remote Alerts"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Infant Vital Sensors" -> "ESP32 Data Acquisition";
  "Incubator Environment Sensors" -> "ESP32 Data Acquisition";
  "ESP32 Data Acquisition" -> "Wi-Fi / MQTT" ->
  "Central Monitoring Dashboard" -> "Local & Remote Alerts";
}
`,

  working:
    "Sensors attached to or placed near the infant and inside the incubator periodically measure vitals and environmental conditions. The ESP32 reads these values, checks them against predefined safety thresholds and publishes them to a central server or MQTT broker over Wi-Fi. A dashboard running on a PC or tablet displays all incubators and highlights any unit with abnormal readings. If limits are crossed, the system triggers a local buzzer at the incubator and sends a notification to the nursing station or mobile devices.",

  applications: [
    "Neonatal intensive care units (NICU)",
    "Pediatric hospitals and clinics",
    "Research prototypes for smart incubators",
    "Training tools for biomedical and IoT engineering"
  ]
},
{
  id: 63,
  title: "AR Indoor Navigation App for Campuses and Malls",
  shortDescription:
    "Augmented Reality app that guides users indoors using overlaid navigation arrows on the live camera view.",
  year: "4th",
  domain: "AR/VR",
  difficulty: "Hard",
  tags: ["Augmented Reality", "Indoor Navigation", "ARCore/ARKit"],

  problemStatement:
    "GPS works well outdoors but is unreliable inside large buildings like malls, hospitals or campuses, making it difficult for visitors to find rooms, shops or departments. Static signboards are not always intuitive. An AR-based navigation system can provide intuitive, turn-by-turn directions on a smartphone.",

  abstract:
    "This project develops a mobile AR application that overlays directional arrows and markers on the live camera feed to guide users to their destination inside a building. The app uses indoor maps, QR-code or marker-based location initialization, and AR frameworks (ARCore/ARKit) for tracking device pose. Users select their destination (e.g., lab number, shop name) and the app computes a path, then displays virtual arrows, lines and labels aligned with the real-world environment as viewed through the camera.",

  components: [
    "Android phone with ARCore support or iPhone with ARKit",
    "Unity or native ARCore/ARKit SDK",
    "Indoor floor plan or map data",
    "QR codes / visual markers for location calibration (or BLE beacons, optional)",
    "Simple backend or local data store for POIs (rooms, shops, labs)"
  ],

  blockDiagram: [
    "User Device & Camera",
    "AR Engine (Tracking & Pose Estimation)",
    "Indoor Map & Path Planning",
    "AR Overlay Renderer (Arrows & Labels)",
    "User Navigation Experience"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Camera Input" -> "AR Engine (Pose Tracking)" ->
  "Indoor Map & Path Planning" ->
  "AR Overlay Renderer" ->
  "User Navigation View";
}
`,

  working:
    "The user opens the app and scans a known marker (e.g., QR at entrance) to calibrate the starting position. The AR engine continuously tracks device movement using visual-inertial odometry. The user chooses a destination from a list or map. The path planning module calculates the shortest path using the indoor graph. As the user moves, the AR renderer draws virtual arrows and labels anchored to the real environment in the camera view, indicating turn directions and distance. The path updates in real time as the user progresses.",

  applications: [
    "University and college campus navigation",
    "Shopping mall and exhibition hall guidance",
    "Airport and hospital wayfinding",
    "Showcase project for AR + mapping"
  ]
},
{
  id: 64,
  title: "VR Stress Relief Environment with Biofeedback",
  shortDescription:
    "Virtual Reality relaxation experience that adapts visuals and audio based on user heart rate or stress level.",
  year: "4th",
  domain: "AR/VR",
  difficulty: "Hard",
  tags: ["Virtual Reality", "Biofeedback", "Mental Health", "Unity3D"],

  problemStatement:
    "Stress and anxiety are increasingly common, especially among students and working professionals. While VR relaxation apps exist, many do not adapt to the user’s actual physiological state. A VR environment that responds to real-time biofeedback can make stress relief more effective and personalized.",

  abstract:
    "This project creates an immersive VR environment (such as a beach, forest or space scene) that dynamically adapts based on the user’s heart rate or other stress indicators. A wearable sensor tracks heart rate and transmits data to the VR application. When high stress levels are detected, the scene adjusts by reducing motion, softening colors, adding calming sounds or guiding the user through breathing exercises. As the heart rate decreases, the environment gradually changes, providing visual positive feedback to the user.",

  components: [
    "VR headset (e.g., Oculus Quest / PC VR headset)",
    "PC with Unity3D or Unreal Engine",
    "Heart rate sensor (e.g., Bluetooth HR band or custom pulse sensor)",
    "Bluetooth / Wi-Fi link between sensor and VR system",
    "3D models, audio assets and animations for calming environments"
  ],

  blockDiagram: [
    "Heart Rate / Biofeedback Sensor",
    "Data Receiver on VR Host",
    "Stress Level Estimation Module",
    "VR Environment Controller",
    "Visual & Audio Adaptation",
    "User Immersive Experience"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "HR / Biofeedback Sensor" ->
  "Data Receiver (VR Host)" ->
  "Stress Level Estimation" ->
  "VR Environment Controller" ->
  "Visual & Audio Adaptation" ->
  "User Experience";
}
`,

  working:
    "A heart rate or biofeedback sensor worn by the user streams data to the VR application over Bluetooth or Wi-Fi. The VR host calculates stress-related metrics such as average heart rate and heart rate variability. The stress estimation module maps these metrics to stress levels (e.g., calm, mild stress, high stress). The VR controller then adjusts scene parameters like brightness, color saturation, object motion speed, ambient sounds and on-screen breathing guides. The user sees and hears a calmer environment as they relax, reinforcing the stress reduction process.",

  applications: [
    "Stress relief for students and office workers",
    "Therapeutic support for anxiety management",
    "Wellness centers and counseling labs",
    "Experimental research in VR + biofeedback"
  ]
}
,
{
  id: 65,
  title: "Hand Gesture-Based Human–Computer Interaction System",
  shortDescription:
    "Uses computer vision to recognize hand gestures and control media, slides, or basic UI actions without touch.",
  year: "3rd",
  domain: "AI/ML",
  difficulty: "Medium",
  tags: ["Computer Vision", "Gesture Recognition", "HCI"],

  problemStatement:
    "Conventional interaction with computers relies heavily on keyboard, mouse, or touch interfaces, which are not always convenient or accessible for all users. In scenarios like presentations, lab demos, or for users with mobility limitations, contactless interaction through hand gestures can provide a more natural and inclusive way to control devices.",

  abstract:
    "This project implements a real-time hand gesture recognition system using a webcam and computer vision techniques. The system detects the user’s hand region, extracts keypoints or contour features, and classifies specific static or dynamic gestures using a trained machine learning or deep learning model. Each recognized gesture is mapped to an action such as next/previous slide, volume up/down, play/pause or launching applications. The project demonstrates a low-cost, software-based Human–Computer Interaction (HCI) approach that can be used in classrooms, smart homes, or accessibility tools.",

  components: [
    "Laptop/PC with webcam",
    "Python with OpenCV",
    "Mediapipe or custom hand landmark detector (optional)",
    "Machine learning / deep learning library (Scikit-Learn or TensorFlow/Keras)",
    "GUI or background script for mapping gestures to system actions"
  ],

  blockDiagram: [
    "Webcam Video Capture",
    "Hand Detection & Segmentation",
    "Feature Extraction / Hand Landmarks",
    "Gesture Classification Model",
    "Mapped System Actions (Media / Slides / UI)"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Webcam Video Capture" ->
  "Hand Detection & Segmentation" ->
  "Feature Extraction / Landmarks" ->
  "Gesture Classification Model" ->
  "System Actions (Media / Slides / UI)";
}
`,

  working:
    "The webcam continuously captures frames of the user’s hand. The hand region is detected using color segmentation, background subtraction, or a pre-trained hand detector (e.g., Mediapipe Hands). From this region, features such as contour shape, convex hull defects, or 3D landmarks of fingers are extracted. These features are passed into a trained classifier that recognizes gestures like open palm, fist, swipe left/right, thumbs up, etc. Each gesture is bound to an OS-level action, such as simulating key presses for slide navigation or controlling media playback. The system runs in real time and can display an on-screen overlay showing the currently detected gesture.",

  applications: [
    "Touchless control for presentations in classrooms and seminars",
    "Accessibility interface for users with limited mobility",
    "Gesture-controlled media center or smart TV",
    "Interactive kiosks and exhibition demos",
    "Foundation for AR/VR gesture interaction research"
  ]
},
{
  id: 66,
  title: "Solar Irradiance Prediction System Using Machine Learning",
  shortDescription:
    "Predicts short-term solar irradiance and power output using historical weather data and ML models.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["Renewable Energy", "Time-Series Prediction", "Solar Power"],

  problemStatement:
    "Solar power generation is highly dependent on weather conditions and irradiance levels, which vary throughout the day. Poor forecasting of solar irradiance can lead to suboptimal planning of energy storage and grid balancing. A data-driven prediction system can help estimate solar output and improve scheduling for microgrids and rooftop solar installations.",

  abstract:
    "This project develops a solar irradiance prediction system that uses historical weather and irradiance data to forecast short-term solar power potential. Meteorological parameters such as temperature, humidity, cloud cover, wind speed and past irradiance values are used to train regression models like Random Forest, Gradient Boosting, or LSTM-based neural networks. The predicted irradiance can be translated into expected power output for a given photovoltaic (PV) panel setup. A web dashboard visualizes real-time readings and forecast curves, enabling better decision-making for energy management.",

  components: [
    "Historical solar irradiance and weather dataset (from local station or open data)",
    "Python with Pandas, NumPy, Scikit-Learn and/or TensorFlow/Keras",
    "Optional local sensor node with light sensor (e.g., photodiode/TSL2561) for real-time data",
    "Web dashboard (Flask / Django / Node.js + React)",
    "Optional integration with a small PV panel and power meter"
  ],

  blockDiagram: [
    "Historical Weather & Irradiance Data",
    "Data Cleaning & Feature Engineering",
    "ML Model Training (Regression / LSTM)",
    "Real-Time Input (Current Weather)",
    "Solar Irradiance & Power Forecast",
    "Visualization Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Historical Weather & Irradiance Data" ->
  "Data Cleaning & Feature Engineering" ->
  "ML Model Training" ->
  "Trained Forecast Model";

  "Current Weather Inputs" ->
  "Trained Forecast Model" ->
  "Irradiance & Power Forecast" ->
  "Dashboard Visualization";
}
`,

  working:
    "First, historical datasets containing solar irradiance (W/m²) and associated weather parameters are collected and preprocessed by handling missing values, scaling features and creating time-based features (hour of day, day of year, etc.). Several regression models are trained and evaluated on this dataset; the best-performing model is selected and saved. During deployment, current or forecasted weather values are fed into the trained model to predict irradiance for the next few hours. By multiplying irradiance estimates with PV panel specifications and efficiency, expected power output is calculated. A dashboard shows live measurements (if sensors are present) along with the near-future forecast curve, helping operators plan storage usage and grid interaction.",

  applications: [
    "Rooftop solar plant planning and scheduling",
    "Microgrid and smart grid energy management",
    "Research on renewable energy forecasting",
    "Educational tool for solar PV performance analysis"
  ]
},
{
  id: 67,
  title: "Smart Water Leakage Detection System Using Pressure & Flow Sensors",
  shortDescription:
    "Monitors water pipelines for leakage using pressure/flow sensors and anomaly detection algorithms.",
  year: "3rd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Water Management", "Anomaly Detection", "Smart City"],

  problemStatement:
    "Undetected leaks in water pipelines and building plumbing systems lead to significant water loss, structural damage and higher utility bills. Manual inspection is slow and often only performed after visible damage occurs. A continuous monitoring solution that can detect leaks early can save water and maintenance costs.",

  abstract:
    "This project implements a smart water leakage detection system that continuously monitors water flow and pressure in pipelines using sensor nodes. Under normal conditions, the relationship between inlet flow, outlet flow and pressure is stable. The system learns or models this behavior and uses anomaly detection algorithms (threshold-based or ML-based) to flag leaks when unusual patterns occur. Alerts are sent to users via mobile app or SMS, and leak location can be approximated if multiple sensors are deployed along the pipe.",

  components: [
    "Flow sensor (e.g., YF-S201) for measuring water flow rate",
    "Pressure sensor module suitable for water lines",
    "Microcontroller with Wi-Fi (ESP32 / ESP8266)",
    "Solenoid valve (optional) to shut off water automatically",
    "Power supply and waterproof sensor housings",
    "Cloud server / MQTT broker and mobile/web dashboard"
  ],

  blockDiagram: [
    "Flow & Pressure Sensors",
    "ESP32 Acquisition & Local Processing",
    "Leakage Detection Logic / Anomaly Detection",
    "Cloud Server / Dashboard",
    "User Alert (App / SMS)",
    "Optional Valve Control"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Flow & Pressure Sensors" ->
  "ESP32 Acquisition & Processing" ->
  "Leakage Detection Logic" ->
  "Cloud / Dashboard" ->
  "User Alerts";

  "Leakage Detection Logic" -> "Valve Control (Optional)";
}
`,

  working:
    "The system installs flow and pressure sensors at strategic locations (e.g., inlet to a building, after main valves, etc.). The ESP32 reads these values at fixed intervals and computes flow balance and pressure drop. Under normal consumption, patterns are predictable. If the system detects continuous flow when no appliances are expected to be running or observes a significant pressure drop without corresponding outlet usage, it flags a potential leak. Data is sent to a cloud dashboard where historical graphs help identify slow leaks as well. Alerts are delivered to the user’s phone, and optionally, the system can close a solenoid valve to stop water flow automatically.",

  applications: [
    "Residential and apartment water monitoring",
    "Smart campus and smart city water distribution",
    "Industrial water pipeline monitoring",
    "Utility companies reducing non-revenue water loss"
  ]
},
{
  id: 68,
  title: "AI-Based Student Engagement Detection in Online Classes",
  shortDescription:
    "Analyzes webcam video and interaction patterns to estimate student engagement level during online lectures.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["EdTech", "Computer Vision", "Engagement Analytics"],

  problemStatement:
    "During online classes, instructors often cannot reliably judge whether students are attentive or distracted. This reduces the effectiveness of teaching and makes it difficult to adapt pace or style. There is a need for a non-intrusive system that can estimate engagement level using available signals like facial expressions, gaze direction and activity patterns.",

  abstract:
    "This project develops a student engagement detection system using AI techniques. The system processes webcam feeds and optional interaction logs (e.g., keyboard/mouse activity, question response time) to infer engagement levels such as attentive, distracted, or drowsy. Facial cues like eye openness, gaze towards the screen, head pose and expression are analyzed using computer vision models. A classifier or regression model combines these features to generate an engagement score over time. Results can be shown to instructors in aggregated form, helping them adjust teaching strategies.",

  components: [
    "Laptop/PC with webcam",
    "Python with OpenCV and Mediapipe / Dlib",
    "Deep learning models for face, gaze and emotion (TensorFlow/PyTorch)",
    "Optional logging of keyboard/mouse activity",
    "Backend + dashboard (Flask/Django + simple frontend)"
  ],

  blockDiagram: [
    "Webcam & Interaction Data",
    "Face, Eye & Gaze Detection",
    "Feature Extraction (Expressions, Gaze, Activity)",
    "Engagement Classification / Scoring Model",
    "Per-Student or Class-Level Engagement Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Webcam & Interaction Data" ->
  "Face / Eye / Gaze Detection" ->
  "Feature Extraction" ->
  "Engagement ML Model" ->
  "Engagement Score & Dashboard";
}
`,

  working:
    "For each student, the system periodically captures frames from the webcam and detects the face, eyes and head orientation. It checks whether the eyes are open, whether the gaze is towards the screen, and analyzes facial expressions for boredom or interest. Optionally, data like how frequently the student interacts with the platform (answering polls, asking questions, typing) is recorded. These features are fed into a classifier or regression model trained to output an engagement score. The system then plots engagement over time and can provide the instructor with insights such as when attention was highest or lowest during the session.",

  applications: [
    "Online learning platforms and virtual classrooms",
    "Corporate training and webinars",
    "Research on human–computer interaction in education",
    "Smart classrooms that adapt teaching content based on engagement"
  ]
},
{
  id: 69,
  title: "Deepfake Voice and Video Detection System",
  shortDescription:
    "Uses deep learning models to detect manipulated (deepfake) audio and video content for security and media verification.",
  year: "4th",
  domain: "AI/ML",
  difficulty: "Hard",
  tags: ["Deepfake Detection", "Security", "Forensics", "Media Authenticity"],

  problemStatement:
    "Advances in generative AI have made it easy to create deepfake audio and video where a person appears to say or do things they never did. Such content can be used for misinformation, fraud and identity attacks. There is a crucial need for tools that can help detect whether a given clip is genuine or manipulated.",

  abstract:
    "This project designs a deepfake detection pipeline for both voice and video. For video, it uses frame-level analysis of facial artifacts, inconsistencies in eye blinking, head motion and texture patterns using CNN-based models or pretrained deepfake detection networks. For voice, it analyzes spectrograms and voice features using CNN/RNN models to distinguish real speech from synthesized or cloned audio. A web interface allows users to upload a video or audio file and receive a probability score indicating whether it is likely to be a deepfake.",

  components: [
    "Dataset of real and deepfake videos (e.g., FaceForensics++, DFDC)",
    "Dataset of real and synthetic audio samples",
    "Python with TensorFlow/PyTorch",
    "Feature extraction tools (Librosa for audio, OpenCV for video)",
    "GPU-enabled machine for training (or cloud GPU)",
    "Web interface (Flask/Django backend + simple frontend)"
  ],

  blockDiagram: [
    "Input Media (Audio/Video)",
    "Preprocessing (Frames / Spectrograms)",
    "Feature Extraction (Faces / Voice Features)",
    "Deepfake Detection Models (Video & Audio)",
    "Authenticity Score & Report"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled", fontsize=10];

  "Input Audio / Video" ->
  "Preprocessing (Frames / Spectrograms)" ->
  "Feature Extraction" ->
  "Deepfake Detection Models" ->
  "Authenticity Score & Report";
}
`,

  working:
    "When a user uploads a media file, the system first identifies whether it is audio-only, video-only, or both. For videos, it extracts frames, detects and crops faces, and optionally computes temporal features across frames. For audio, it converts the signal into spectrograms and extracts features like MFCCs. These inputs are passed into pretrained or fine-tuned deep learning models trained to differentiate between real and fake samples. The output contains a confidence score (e.g., 0–100%) that indicates how likely the content is to be manipulated. The interface displays this score along with a simple explanation or visualization (such as heatmaps highlighting suspicious areas in video).",

  applications: [
    "Journalism and media verification tools",
    "Social media content moderation",
    "Cybersecurity and digital forensics",
    "Public awareness tools demonstrating deepfake risks",
    "Academic research on generative model detection"
  ]
}
,
{
  id: 70,
  title: "Serverless Sensor Data Pipeline Using AWS (IoT → Lambda → DynamoDB → Dashboard)",
  shortDescription:
    "A fully serverless cloud pipeline that collects IoT sensor data, processes it using AWS Lambda, stores it in DynamoDB, and visualizes it on a dashboard.",
  year: "4th",
  domain: "Cloud & DevOps",
  difficulty: "Hard",
  tags: ["AWS", "IoT", "Serverless", "Cloud Computing", "Dashboard"],

  problemStatement:
    "Traditional IoT systems often require dedicated backend servers, leading to higher costs, poor scalability, and maintenance overhead. There is a need for a highly scalable, cost-efficient, and maintenance-free solution that can ingest, process, store, and visualize IoT data without managing servers.",

  abstract:
    "This project builds a serverless architecture using AWS cloud services. IoT devices send sensor data to AWS IoT Core, which triggers AWS Lambda functions for real-time processing. Cleaned data is stored in DynamoDB, while historical analytics can be performed using AWS Athena. A lightweight dashboard (React or AWS Amplify Hosting) visualizes live and past sensor data. This architecture auto-scales with load, has zero server management, and is ideal for large sensor deployments.",

  components: [
    "ESP32 / ESP8266 IoT node",
    "AWS IoT Core (MQTT Broker)",
    "AWS Lambda",
    "AWS DynamoDB",
    "AWS IAM & API Gateway",
    "Frontend dashboard (React / Next.js / Amplify)"
  ],

  blockDiagram: [
    "IoT Sensor Node",
    "AWS IoT Core",
    "AWS Lambda Processing",
    "DynamoDB Storage",
    "Dashboard API Gateway",
    "Web Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled"];
  "IoT Node" -> "AWS IoT Core" -> "AWS Lambda" -> "DynamoDB";
  "DynamoDB" -> "API Gateway" -> "Dashboard";
}
`,

  working:
    "IoT sensors periodically publish readings to AWS IoT Core using MQTT. An IoT Rule triggers a Lambda function that validates, filters, and transforms the incoming data. The processed data is then inserted into DynamoDB. The dashboard calls an API Gateway endpoint that queries the database and displays time-series graphs and real-time updates. The entire system scales automatically and requires no physical servers.",

  applications: [
    "Smart campus monitoring",
    "Large-scale IoT deployments",
    "Industry sensor analytics",
    "Environmental monitoring stations",
    "Cloud DevOps training projects"
  ]
},
{
  id: 71,
  title: "CI/CD Pipeline Monitoring Dashboard for Student Projects",
  shortDescription:
    "Visual dashboard that tracks build, test, and deployment status of student software projects using GitHub Actions or GitLab CI.",
  year: "3rd",
  domain: "DevOps",
  difficulty: "Medium",
  tags: ["CI/CD", "Monitoring", "Automation", "GitHub Actions", "DevOps"],

  problemStatement:
    "Students working on software projects often lack visibility into automated build and deployment pipelines. Without monitoring, failures go unnoticed, leading to broken applications and wasted development time. A centralized dashboard that shows CI/CD status helps improve productivity and reliability.",

  abstract:
    "This project builds a monitoring dashboard that aggregates CI/CD pipeline statuses for multiple repositories using APIs from GitHub Actions or GitLab CI. The system fetches build status, test results, deployment logs, and error messages, and displays them in real time. It helps students and faculty keep track of project health and ensures continuous integration practices are followed.",

  components: [
    "GitHub/GitLab repositories with CI/CD workflows",
    "API access tokens",
    "Backend service (Node.js / Python Flask)",
    "Database (MongoDB / Firebase / PostgreSQL)",
    "Frontend dashboard UI (React/Next.js)"
  ],

  blockDiagram: [
    "CI/CD Provider (GitHub/GitLab)",
    "API Data Fetcher",
    "Backend Aggregator Service",
    "Database Storage",
    "Dashboard UI",
    "Alerts & Notifications"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled"];
  
  "CI/CD Provider" -> "API Fetcher" -> "Backend Aggregator" -> "Database";
  "Database" -> "Dashboard UI";
}
`,

  working:
    "The backend periodically calls GitHub/GitLab APIs to check the latest pipeline runs for selected student repositories. It stores build history, success/failure patterns, test logs, and branch-level results in a database. The dashboard visualizes this information through color-coded charts and indicators. Notifications can be sent to students when a build breaks or tests fail.",

  applications: [
    "University coding projects",
    "Software engineering labs",
    "DevOps learning environments",
    "Hackathon project tracking"
  ]
},
{
  id: 72,
  title: "Quantum Random Number Generator Simulation Using Qiskit",
  shortDescription:
    "Simulates quantum circuits to generate true random numbers based on quantum superposition and measurement.",
  year: "4th",
  domain: "Quantum Computing",
  difficulty: "Hard",
  tags: ["Quantum Computing", "Qiskit", "Simulation", "Randomness"],

  problemStatement:
    "Modern cryptography relies on randomness, but many pseudo-random number generators are deterministic and predictable if seeded poorly. Quantum mechanics provides a fundamentally unpredictable source of randomness. A simulator-based QRNG helps students learn how quantum processes generate randomness.",

  abstract:
    "This project uses IBM’s Qiskit framework to design a simple quantum circuit that produces true randomness using qubits initialized in a superposition state. Measurement collapses the qubits to |0⟩ or |1⟩ with equal probability, generating random bits. The system includes visualization of Bloch spheres, probability distributions, and output entropy analysis. It can be extended into a secure key generator for cryptographic applications.",

  components: [
    "Python",
    "Qiskit SDK",
    "Jupyter Notebook",
    "Matplotlib for visualization",
    "Optional cloud execution on IBM Quantum Experience"
  ],

  blockDiagram: [
    "Initialize Qubit",
    "Apply Hadamard Gate (Superposition)",
    "Measure Qubit State",
    "Generate Random Bit Stream",
    "Entropy & Statistical Analysis"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  node [shape=box, style="rounded,filled"];

  "Initialize Qubit" -> "Apply Hadamard Gate" -> "Measure Qubit" ->
  "Random Bit Output" -> "Statistical Analysis";
}
`,

  working:
    "The program initializes a qubit in the |0⟩ state, applies a Hadamard gate to place it in equal superposition, and measures it, generating a random bit. Repeating the circuit many times produces a random bitstring. Visualization tools show probability distributions and how measurement collapses quantum states. The system evaluates randomness using entropy and standard tests.",

  applications: [
    "Cryptography and secure key generation",
    "Educational quantum computing demos",
    "Understanding superposition and measurement",
    "Research in quantum randomness"
  ]
},
{
  id: 73,
  title: "Precision Agriculture System with Soil Analysis & Automated Irrigation",
  shortDescription:
    "A smart agriculture system that analyzes soil moisture, nutrients, and weather to optimize irrigation and fertilizer schedules.",
  year: "3rd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Agriculture", "IoT", "Automation", "Smart Farming"],

  problemStatement:
    "Farmers often use excessive water and fertilizers due to lack of real-time data on soil and weather conditions. This leads to resource wastage and reduced crop yield. A smart system that automates irrigation and recommends fertilizer schedules can significantly improve efficiency.",

  abstract:
    "This system uses soil moisture sensors, NPK nutrient sensors, and a weather API to compute irrigation needs. A microcontroller opens or closes solenoid valves automatically based on thresholds or machine learning predictions. The dashboard provides insights such as soil nutrient levels, moisture trends, and irrigation history.",

  components: [
    "ESP32/ESP8266",
    "Soil moisture sensor",
    "NPK soil nutrient sensor",
    "Solenoid valve + relay",
    "Cloud dashboard",
    "Weather API integration"
  ],

  blockDiagram: [
    "Soil Sensors",
    "ESP32 Controller",
    "Cloud Dashboard",
    "Automated Irrigation Valve",
    "Farmer Alerts"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Soil Sensors" -> "ESP32 Controller" -> "Cloud Dashboard";
  "ESP32 Controller" -> "Irrigation Valve";
  "Cloud Dashboard" -> "Farmer Alerts";
}
`,

  working:
    "The ESP32 reads soil moisture and nutrient levels and compares them to crop-specific thresholds. Using weather forecast data, the system decides whether irrigation is needed. If moisture is too low, the valve opens automatically. The dashboard logs all actions and alerts the farmer when fertilizer levels drop.",

  applications: [
    "Smart farms",
    "Greenhouse automation",
    "Agricultural analytics",
    "Water optimization systems"
  ]
},
{
  id: 74,
  title: "Driver Drowsiness and Distraction Detection System",
  shortDescription:
    "Monitors eye closure, head tilt, and gaze direction to detect drowsiness or distraction while driving.",
  year: "3rd",
  domain: "AI/ML",
  difficulty: "Medium",
  tags: ["Driver Safety", "Computer Vision", "Real-Time Detection"],

  problemStatement:
    "Drowsy and distracted driving are major causes of road accidents. Human drivers often fail to recognize their own fatigue levels. A system that can detect early signs of drowsiness and issue warnings could prevent fatal accidents.",

  abstract:
    "This project develops a real-time driver monitoring system using facial landmark detection and gaze estimation. It tracks blink rate, eye closure duration, head nodding, and gaze direction. If the system detects prolonged eye closure or off-road gaze, it triggers audible and visual alerts. A CNN-based classifier can improve accuracy under different lighting conditions.",

  components: [
    "Camera module / webcam",
    "OpenCV + Mediapipe or Dlib",
    "Python/TensorFlow",
    "Buzzer / speaker for warnings",
    "Dashboard (optional)"
  ],

  blockDiagram: [
    "Camera Input",
    "Face & Eye Detection",
    "Landmark Extraction",
    "Drowsiness & Distraction Logic",
    "Warning System"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Camera Input" -> "Face & Eye Detection" ->
  "Landmark Extraction" -> "Drowsiness Logic" -> "Warning System";
}
`,

  working:
    "The camera continuously captures frames of the driver's face. Eye aspect ratio and blink rate are computed from facial landmarks. If eyes remain closed beyond a threshold, the system triggers a drowsiness alert. Gaze tracking checks whether the driver is looking away from the road. Head tilt detection identifies nodding associated with sleepiness. Alerts include sound, vibration, or dashboard indicators.",

  applications: [
    "Smart vehicles",
    "Fleet management",
    "Driver safety monitoring",
    "Semi-autonomous driving research"
  ]
}
,
{
  id: 75,
  title: "Real-Time Flood Monitoring & Early Warning System",
  shortDescription:
    "IoT-based flood monitoring system that measures water level, rainfall and flow rate, sending early warnings and risk predictions.",
  year: "4th",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Smart City", "Disaster Management", "Early Warning", "IoT Sensors"],

  problemStatement:
    "Floods cause massive destruction due to lack of timely alerts. Manual monitoring of rivers and reservoirs is slow and error-prone. A real-time automated system is required to monitor rising water levels and alert authorities before the situation becomes critical.",

  abstract:
    "This project implements an IoT-based flood monitoring system using ultrasonic water-level sensors, rainfall sensors and flow-rate sensors deployed near rivers or reservoirs. The data is transmitted to a cloud server, where thresholds and prediction models detect dangerous rises. When risk levels are crossed, SMS/app alerts are sent to residents and authorities. A dashboard visualizes historical water levels, rainfall trends, and predicted flood-risk zones.",

  components: [
    "ESP32 / ESP8266",
    "Ultrasonic water level sensor",
    "Rainfall sensor",
    "Flow rate sensor",
    "Solar power (optional)",
    "Cloud server + dashboard",
    "Twilio / Firebase for alerts"
  ],

  blockDiagram: [
    "Water Level Sensor",
    "Rainfall & Flow Sensors",
    "ESP32 Controller",
    "Cloud Server",
    "Flood Prediction Engine",
    "Alerts & Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Sensors" -> "ESP32 Node" -> "Cloud Server" -> "Prediction Engine" -> "Alerts & Dashboard";
}
`,

  working:
    "The ESP32 reads water-level, rainfall and flow-rate values at regular intervals and publishes them to the cloud. Threshold logic detects rapid rises in water level. A simple prediction model calculates flood probability based on trends. If danger is detected, the system sends alerts via SMS or push notification. The dashboard shows real-time water level graphs and early warnings.",

  applications: [
    "River and dam monitoring",
    "Urban stormwater management",
    "Disaster-prevention systems",
    "Smart city environmental safety"
  ]
}
,
{
  id: 76,
  title: "Smart Air Purifier with AQI Monitoring & Automatic Speed Control",
  shortDescription:
    "Monitors indoor air quality using gas and dust sensors, and automatically adjusts air purifier fan speed using AI logic.",
  year: "3rd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["Air Quality", "Automation", "IoT", "Smart Home"],

  problemStatement:
    "Indoor air pollution is often worse than outdoor pollution, causing respiratory issues. Manual control of air purifiers is inefficient, as air quality can fluctuate quickly. A smart system that monitors indoor AQI and autonomously adjusts purifier settings can significantly improve indoor environmental health.",

  abstract:
    "The project integrates an MQ-series gas sensor, PM2.5 dust sensor and temperature/humidity sensor with a microcontroller to measure indoor AQI. Based on pollution levels, the system adjusts purifier fan speed using preset rules or a small ML model. A mobile dashboard displays AQI, purifier state and historical trends. Voice assistant integration allows hands-free control.",

  components: [
    "ESP32 / NodeMCU",
    "MQ135 Gas Sensor",
    "PM2.5 Dust Sensor",
    "DHT22 Temperature/Humidity Sensor",
    "Purifier fan + motor driver",
    "Mobile app or web dashboard"
  ],

  blockDiagram: [
    "AQI Sensors (MQ135 + PM2.5 + DHT22)",
    "ESP32 Processing",
    "AQI Index Calculation",
    "Fan Speed Control Logic",
    "Dashboard & Alerts"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "AQI Sensors" -> "ESP32 Processing" -> "AQI Calculation" -> "Fan Speed Control" -> "Dashboard";
}
`,

  working:
    "Sensors detect gas concentration, particulate matter and humidity. ESP32 calculates AQI and determines the appropriate fan speed (Low / Medium / High / Turbo). When pollution increases suddenly, the system boosts the purifier power. A dashboard displays data in real time, and alerts trigger when AQI crosses harmful thresholds.",

  applications: [
    "Homes, offices and classrooms",
    "Smart HVAC systems",
    "Health-focused indoor environments",
    "IoT environmental monitoring research"
  ]
}
,
{
  id: 77,
  title: "Smart Library Book Tracking with RFID & Analytics",
  shortDescription:
    "RFID-based library automation system that tracks book movement, prevents loss, and provides analytics on usage patterns.",
  year: "2nd",
  domain: "IoT",
  difficulty: "Medium",
  tags: ["RFID", "Library Automation", "Tracking System"],

  problemStatement:
    "Libraries struggle with tracking borrowed/returned books, preventing theft, and understanding real book usage. Manual systems are slow and prone to errors. RFID can automate the entire process efficiently.",

  abstract:
    "This project uses RFID tags on books and RFID readers at entry/exit gates to track book movement automatically. A central system logs borrowing, returning and unauthorized removal attempts. The dashboard displays real-time inventory, most-read books, category-wise analytics and overdue notifications.",

  components: [
    "RFID tags (one per book)",
    "RFID reader (RC522 or long-range reader)",
    "ESP32 / Arduino Mega",
    "Database (Firebase / SQL)",
    "Library dashboard web app"
  ],

  blockDiagram: [
    "RFID Tag on Book",
    "RFID Reader Scan",
    "Controller Logic",
    "Database Update",
    "Dashboard Analytics"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "RFID Tag" -> "RFID Reader" -> "Controller" -> "Database" -> "Dashboard";
}
`,

  working:
    "Books are tagged with RFID. When a book is borrowed, the reader scans it and updates the database. At exit gates, RFID readers detect unauthorized removals and trigger alarms. The dashboard shows book counts, borrowing frequency and overdue details.",

  applications: [
    "Libraries",
    "University book management",
    "Bookstore inventory automation"
  ]
}
,
{
  id: 78,
  title: "AI-Powered Career Recommendation System",
  shortDescription:
    "Recommends ideal career paths for students based on skills, interests, personality and performance using ML models.",
  year: "3rd",
  domain: "AI/ML",
  difficulty: "Medium",
  tags: ["Career Guidance", "Recommendation System", "AI"],

  problemStatement:
    "Students often struggle to choose suitable careers due to lack of personalized guidance. Traditional counseling is limited and cannot scale to thousands of students. A data-driven recommendation engine can help students make informed decisions.",

  abstract:
    "This system collects inputs such as academic performance, skill ratings, interest surveys, personality traits and extracurricular involvement. ML models like KNN or clustering algorithms group students with similar profiles and recommend suitable education or career paths. The dashboard presents career strengths, recommended roles and required skills to focus on.",

  components: [
    "Python + Scikit-Learn",
    "Survey form & data collection",
    "Dataset for training (skills, careers mapping)",
    "Web dashboard",
    "Optional personality test API integration"
  ],

  blockDiagram: [
    "Student Input Data",
    "Feature Extraction",
    "ML Recommendation Model",
    "Career Path Suggestions",
    "Dashboard Visualization"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Student Data" -> "Feature Extraction" -> "Model" -> "Recommendations" -> "Dashboard";
}
`,

  working:
    "Students enter academic scores, interests, skills and personality traits. The model processes this data and predicts suitable domains such as software, design, research, marketing, etc. The dashboard displays career matches, skill gaps and suggested learning resources.",

  applications: [
    "Schools and colleges",
    "Career counseling centers",
    "Online learning platforms",
    "Personal career planning"
  ]
}
,
{
  id: 79,
  title: "Smart Parking System with Number Plate Recognition (ANPR)",
  shortDescription:
    "Automatically detects available parking slots and identifies vehicles using number plate recognition.",
  year: "4th",
  domain: "Computer Vision",
  difficulty: "Hard",
  tags: ["ANPR", "Parking Automation", "Smart City"],

  problemStatement:
    "Parking spaces in malls, campuses and city lots are difficult to manage manually. Entry authentication, slot availability updates and payment logging require automation. A system using CV and IoT can streamline parking operations.",

  abstract:
    "This project integrates camera-based number plate recognition with IoT-enabled parking slot detection. At entry, ANPR extracts license plate numbers and logs entry time. Ultrasonic or IR sensors detect free slots and guide drivers using LEDs or dashboard maps. On exit, the system computes parking duration and cost automatically.",

  components: [
    "Raspberry Pi / Jetson Nano",
    "Camera module",
    "YOLO/CRNN for ANPR",
    "Ultrasonic sensors for slot detection",
    "LED indicators",
    "Web dashboard"
  ],

  blockDiagram: [
    "Camera Input (Entrance)",
    "ANPR System",
    "Slot Sensors",
    "Central Server",
    "Parking Dashboard"
  ],

  blockDiagramDot: `
digraph G {
  rankdir=LR;
  "Camera Input" -> "ANPR System" -> "Central Server" -> "Parking Dashboard";
  "Slot Sensors" -> "Central Server";
}
`,

  working:
    "As vehicles arrive, the camera captures the number plate. ANPR detects characters and logs entry time. Slot sensors across the parking area report availability to the central server. The dashboard shows real-time slot status and navigation directions. On exit, the system matches vehicle entry log and computes total parking time.",

  applications: [
    "Smart campus parking",
    "Shopping malls",
    "Apartment complexes",
    "Public parking automation"
  ]
}

];
