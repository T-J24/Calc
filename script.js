body {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
}

.calculator {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#display {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 20px;
    text-align: right;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Important for consistent sizing */
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

button {
    padding: 15px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #eee;
    transition: background-color 0.2s; /* Smooth hover effect */
}

button:hover {
    background-color: #ddd;
}

.operator {
    background-color: #ff9800; /* Orange */
    color: white;
}

.operator:hover {
    background-color: #f57c00;
}

.equals {
    background-color: #4CAF50; /* Green */
    color: white;
}

.equals:hover {
    background-color: #43A047;
}

.clear {
    background-color: #f44336; /* Red */
    color: white;
}

.clear:hover {
    background-color: #d32f2f;
}
.delete{
    background-color: #2196F3; /* Blue */
    color:white;
}
.delete:hover{
    background-color: #1976D2;
}
