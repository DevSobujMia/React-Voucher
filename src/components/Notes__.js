
/* Print-specific styles */
/* Hide action columns */
@media print {
    .remove-col,
    .add-row-btn,
    .print-hide,
    .print-button {
      display: none;
    }
  
    /* Ensure body styles are applied for print */
    .body {
      padding: 20px;
      border: 2px solid black; /* Remove border for print */
      box-shadow: none; /* Remove shadow for print */
      background: none; /* Remove default background */
    }
  
    /* Adjust background image for print */
    .body::before {
      content: "";
      position: absolute;
      top: 15%;
      left: 10%;
      width: 40%;
      height: 40%;
      background-image: url("https://img.freepik.com/premium-photo/black-white-drawing-tractor-with-large-tires-generative-ai_899894-70582.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.2;
      z-index: -1; /* Send background to back */
    }
  
    /* Adjust print layout to fit content */
    .header,
    .table-container,
    .footer {
      position: relative;
      z-index: 1;
      margin: 0; /* Remove margins for print */
      padding: 0; /* Remove padding for print */
    }
  
    /* Ensure elements fit within the page */
    .input-field {
      width: auto; /* Adjust width for print */
      font-size: 0.9em; /* Smaller font size */
    }
  
  }