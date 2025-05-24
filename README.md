# Anxiety Detection Web App (Urdu Language)

## Overview

This is a *machine learning-powered web application* that analyzes *Urdu text* to detect anxiety. Users can input natural Urdu sentences describing their feelings or situations, and the app will predict:

1. Whether the user is experiencing *anxiety or not* (Binary classification)
2. If yes, the *type of anxiety* (Multiclass: e.g., Panic Disorder, Phobia, Selective Mutism, Social Anxiety, Agoraphobia, etc.)
3. The *severity level* of anxiety (Multiclass: Mild, Moderate, Severe, Panic)

This project aims to promote early detection and awareness of mental health in South Asian communities by enabling interaction in the *native Urdu language*.

---

## Problem Statement

In Urdu-speaking communities, *mental health awareness is very low*, often stigmatized, and clinical resources are limited. Many people avoid seeing psychologists due to cultural barriers like:

* "We are not mad, why go to a psychologist?"
* Shame and silence around emotional health

### Project Objectives:

* Make mental health screening accessible using a simple Urdu text input
* Build an NLP + ML system to detect anxiety, its type, and severity
* Provide results in a *private, culturally relevant, and non-judgmental way*

---

## Dataset

There was *no existing dataset* for anxiety detection in Urdu, so we:

* *Created our own custom dataset* (approx. 12,000 Urdu entries)
* Labeled with:

  * binary: 0 (No Anxiety), 1 (Anxiety)
  * all_labels: Type of anxiety (e.g., Panic, Phobia, Selective Mutism)
  * levels: Severity — Mild, Moderate, Severe, Panic

### Annotation Process:

* Manual labeling based on real-life examples
* Verified by psychology students and reviewed by professionals

---

## Tech Stack

### Frontend:

* *React.js* with *Tailwind CSS*
* Responsive UI for mobile and desktop
* Clean design for better emotional comfort during input

### Backend:

* *(In Progress)* Flask or Django will be used
* Will handle:

  * Urdu text preprocessing
  * Model inference (loading trained ML models)
  * API endpoints for frontend-backend communication

### Machine Learning:

* *Preprocessing*: Tokenization, Urdu stopword removal, TF-IDF
* *Models*:

  * Binary: SVM, LightGBM (Top performers)
  * Multiclass: XGBoost, LightGBM, SVM
* *Training Strategy*:

  * Split: 70% Train, 10% Validation, 20% Test
  * Metrics: Accuracy, Weighted F1-score
* *Current Status*:

  * Initial training complete
  * *Hyperparameter tuning is in progress* for better performance

---

## Features

* Urdu text input from user
* Predicts and displays:

  1. *Anxiety Presence* (Yes/No)
  2. *Anxiety Type*
  3. *Anxiety Severity Level*
* Simple, emotionally friendly interface
* Designed for all age groups, with no clinical jargon

---

## Future Work

* Complete backend integration with React frontend
* Add interactive visualizations for personal history tracking
* Mobile app version (React Native or Flutter)
* Multilingual expansion (Punjabi, Pashto, etc.)
* Switch to transformer-based models like *mBERT* or *XLM-RoBERTa*

---

## Getting Started

To run the project locally:

bash
# Frontend
npm install
npm start

# Backend (once added)
pip install -r requirements.txt
python app.py


### Libraries Used:

* *Frontend*: React, Tailwind CSS
* *Backend*: Flask (or Django)
* *ML*: scikit-learn, XGBoost, LightGBM, pandas, matplotlib, seaborn

---

## About the Developer

Created by a final-year Computer Science student with a deep interest in *mental health, Urdu language processing, and **socially impactful AI solutions*.

---

## License

This project is open-source for academic and non-commercial use. Please *cite or credit* the repository if you use the code or dataset.
