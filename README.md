# Anxiety Detection Web App (Urdu Language)

## Overview

This is a *machine learning-powered web application* designed to detect anxiety from *Urdu text*. Users can input natural Urdu sentences describing their feelings or situations, and the app predicts:

1. Whether the user is experiencing *anxiety or not* (Binary classification)  
2. If yes, the *type of anxiety* (Multiclass: e.g., Panic Disorder, Phobia, Selective Mutism, Social Anxiety, etc.)  
3. The *severity level* of anxiety (Multiclass: Mild, Moderate, Severe, Panic)

The aim is to promote early detection and mental health awareness in *South Asian communities*, offering support in a private and culturally relevant way.

---

## Problem Statement

In Urdu-speaking societies, mental health is often stigmatized or ignored due to cultural beliefs and lack of accessible resources. Common barriers include:

- "We are not mad, why go to a psychologist?"  
- Shame and silence around emotional well-being  
- Lack of Urdu-language tools for early detection  

### Project Goals:

- Allow users to express feelings in *Urdu* and get quick, anonymous anxiety assessments  
- Use NLP + ML to detect anxiety type and severity  
- Create a friendly and *non-judgmental* interface  

---

## Dataset

Since no public dataset was available, we created a *custom dataset* of approx. *12,000 Urdu entries*, labeled with:

- binary: 0 (No Anxiety), 1 (Anxiety)  
- all_labels: Type of anxiety (e.g., Panic, Phobia, Selective Mutism)  
- levels: Severity level (Mild, Moderate, Severe, Panic)  

### Annotation Process:

- Labeled manually using real-life examples  
- Reviewed by psychology students and mental health professionals  

---

## Tech Stack

### Frontend

- *React.js* with *Tailwind CSS*  
- Responsive and user-friendly design for web and mobile  
- Emotionally comforting interface  

### Backend

- *Flask* (or *Django*) — in progress  
- Handles:  
  - Urdu text preprocessing  
  - ML model inference  
  - API for frontend communication  

### Machine Learning

- *Preprocessing:* Urdu tokenization, stopword removal, TF-IDF vectorization  
- *Models Used:*  
  - Binary classification: SVM, LightGBM  
  - Multiclass classification: XGBoost, LightGBM, SVM  
- *Training Strategy:*  
  - Train/Validation/Test Split: 70/10/20  
  - Evaluation: Accuracy, Weighted F1-score  
- *Status:* Base models trained; hyperparameter tuning in progress  

---

## Features

- Urdu text input box  
- Displays:  
  1. *Anxiety Presence* (Yes/No)  
  2. *Anxiety Type*  
  3. *Anxiety Severity Level*  
- Clear and calm design, no complex medical jargon  
- Built to be accessible for all age groups  

---

## Future Work

- Complete backend integration with frontend  
- Add personal history tracking and visualizations  
- Mobile app version (React Native / Flutter)  
- Add multilingual support (Punjabi, Pashto, etc.)  
- Upgrade to transformer models like *mBERT* or *XLM-RoBERTa*  

---

## Getting Started

To run this project locally:

### Frontend

bash
cd frontend
npm install
npm start


### Backend (in progress)

bash
cd backend
pip install -r requirements.txt
python app.py


---

## Libraries Used

- *Frontend:* React, Tailwind CSS  
- *Backend:* Flask (or Django)  
- *ML/NLP:* scikit-learn, XGBoost, LightGBM, pandas, matplotlib, seaborn  

---

## About the Developer

This project is developed by a final-year *Computer Science student* with a passion for:

- Mental health advocacy  
- Urdu NLP  
- Socially impactful AI solutions  

---

## License

This project is open-source for academic and non-commercial use.  
*Please credit this repository if you use the code or dataset.*

---
