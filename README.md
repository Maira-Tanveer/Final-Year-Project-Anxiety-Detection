# 🧠 Anxiety Detection Web App (Urdu Language)

An interactive machine learning-powered web application that detects **anxiety** from natural **Urdu text**. This tool is designed for early detection and awareness of mental health conditions in Urdu-speaking communities, offering predictions for:

1. **Anxiety Detection** (Yes/No)  
2. **Anxiety Type** (e.g., Panic Disorder, Phobia, Social Anxiety, Selectivemutism, Agoraphobia, etc.)  
3. **Anxiety Severity Level** (Mild, Moderate, Severe, Panic)

Built with the vision of reducing stigma and making emotional support more accessible.

---

## 🌍 Problem Statement

In South Asian societies, mental health is often overlooked due to cultural stigma:

- "We're not mad—why visit a psychologist?"  
- Shame and silence around emotional expression  
- Lack of Urdu-language tools for mental wellness

This app offers a **safe, anonymous, and culturally relevant** way to talk about anxiety.

---

## 🎯 Project Objectives

- 🧠 Let users express emotions in **Urdu**
- 🔍 Detect **anxiety**, **type**, and **severity**
- 🧑‍🤝‍🧑 Create a **non-judgmental** interface for all ages
- 💬 Encourage **open mental health conversations**

---

## 📊 Dataset

Since no public Urdu dataset existed, a **custom dataset** was developed with ~12,000 labeled samples:

- `binary`: 0 = No Anxiety, 1 = Anxiety  
- `all_labels`: Type of anxiety (e.g., Panic, Phobia)  
- `levels`: Severity (Mild, Moderate, Severe, Panic)

### 🏷 Annotation:

- Based on real-life phrases and scenarios  
- Reviewed by psychology students & mental health advisors

---

## ⚙️ Tech Stack

### 💻 Frontend
- **React.js** + **Tailwind CSS**
- Emotionally comforting design
- Responsive for mobile & desktop

### 🧠 Machine Learning
- **Models Used:**  
  - Binary: `SVM`, `LightGBM`  
  - Multiclass: `XGBoost`, `LightGBM`, `SVM`
- **Preprocessing:** Urdu tokenization, stopword removal, TF-IDF
- **Evaluation Metrics:** Accuracy, F1 Score
- **Train/Test Split:** 70/10/20
- **Next Step:** Hyperparameter tuning

### 🖥 Backend (in progress)
- **Flask** or **Django**
- Handles model inference & API for predictions

---

## 🧪 Features

- Urdu text input interface  
- Shows:
  - ✔️ Whether the user is experiencing anxiety  
  - 🧠 Type of anxiety  
  - 📈 Severity level  
- Reassuring interface without medical jargon  
- Anonymous & user-friendly  

---

## 🚀 Future Enhancements

- Complete backend–frontend integration  
- Mobile version (React Native / Flutter)  
- Mental health tracking & visualization  
- Use of transformer models (e.g., **XLM-RoBERTa**, **mBERT**)

---

## 📦 How to Run

### 🔧 Frontend
```bash
cd frontend
npm install
npm start
```

### 🔌 Backend (Coming Soon)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

---

## 🧰 Libraries Used

| Area         | Libraries/Tools                                     |
|--------------|-----------------------------------------------------|
| Frontend     | React, Tailwind CSS                                 |
| Backend      | Flask (or Django)                                   |
| ML/NLP       | scikit-learn, pandas, numPy, spaCy, Urduhack, NLTK  |
| Visualization| seaborn, matplotlib                                 |

---

## 👩‍💻 About the Team

This project was developed as a **Final Year Project (FYP)** by undergraduate students from the Department of Computer Science, GC University, Lahore:

- **Jaweria Fayyaz**  
- **Maira Tanveer**  
- **Fareeha Shakoor**  

We are passionate about:
- Mental health awareness  
- Urdu NLP & responsible AI  
- Using technology for social good  

---

## 📝 License

This project is **open-source for academic & non-commercial use**.  
Please give credit if you use the dataset or code.

---

> 🧡 *Your feelings are valid. Technology should support you, not judge you.*  
> — **Happy Mental Health Awareness!**
