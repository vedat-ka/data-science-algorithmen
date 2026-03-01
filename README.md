# Data Science Dokumentation – Alle Algorithmen

Interaktive, einsprachig-deutsche HTML-Dokumentation zu den wichtigsten Machine-Learning-Algorithmen. Die Seite läuft komplett lokal im Browser – kein Server, kein Build-Tool erforderlich.

---

## Projektstruktur

```
ai-algorithmen/
├── data_science.html        # Haupt-Dokumentationsseite
├── styles.css               # Stylesheet (Dark-/Light-Theme, Responsive)
├── script.js                # Navigation, Tab-Logik, interaktive Elemente
├── maschinelles_lernen.svg  # Übersicht: Methoden des Maschinellen Lernens
├── mini_bsp_tree.PNG        # Beispiel-Entscheidungsbaum
├── clusteranalyse.svg       # K-Means Clustering Raumklima
├── knn-feedforward.svg      # Feedforward-Neuronales-Netz Diagramm
├── convnet_matlab.png       # CNN-Architektur Diagramm
└── README.md                # Diese Datei
```

---

## Inhalt

| Abschnitt | Thema |
|---|---|
| **Entscheidungshilfe** | Welcher Algorithmus passt zu welchem Problem? |
| **Lernverfahren im Überblick** | Supervised, Unsupervised, Reinforcement, Deep Learning |
| **Decision Tree** | Theorie, Gini-Index, Information Gain, Python-Code |
| **CNN** | Convolutional Neural Networks, Schichtaufbau, Anwendungen |
| **Neural Networks** | MLP, Backpropagation, Aktivierungsfunktionen |
| **Transformer** | Attention-Mechanismus, BERT, GPT |
| **ONNX** | Open Neural Network Exchange, Modell-Export |
| **SVM** | Support Vector Machine, Kernel-Trick, Margin |
| **Naive Bayes** | Bayes-Theorem, Gaussian NB, Text-Klassifikation |
| **Logistische Regression** | Binary/Multinomial, Sigmoid, Kostenfunktion |
| **Vergleich** | Algorithmen-Vergleichstabelle nach Kriterien |
| **Projekte** | Praxisbeispiele mit Code |
| **Glossar** | Fachbegriffe und Definitionen |

---

## Verwendung

Einfach `data_science.html` im Browser öffnen – keine Installation erforderlich.

```
# Datei direkt im Browser öffnen (Windows)
start data_science.html
```

Mathematische Formeln werden über [MathJax](https://www.mathjax.org/) (CDN) gerendert – eine Internetverbindung ist dafür empfehlenswert. Alle Bilder sind lokal eingebunden.

---

## Technologien

- **HTML5** – Semantische Struktur, kein Framework
- **CSS3** – Custom Properties, Grid, Flexbox, Responsive Design
- **JavaScript (Vanilla)** – Tab-Navigation, interaktive Elemente
- **MathJax 3** – LaTeX-Formeln im Browser (CDN)
- **SVG / PNG** – Lokal gespeicherte Diagramme

---

## Algorithmen auf einen Blick

```
Überwachtes Lernen      → Decision Tree · SVM · Naive Bayes · Log. Regression · Neural Network
Unüberwachtes Lernen    → Clustering (K-Means) · Dimensionsreduktion (PCA)
Deep Learning           → CNN · MLP · Transformer
Deployment              → ONNX (plattformübergreifender Modell-Export)
```
