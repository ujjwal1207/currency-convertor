# React Currency Converter

A simple and interactive currency converter built with React.

## Tech Stack

- **React** – For building the user interface and managing state.
- **Vite** – For fast development and build tooling.
- **Tailwind CSS** – For utility-first, responsive styling.

## Features

- Convert between multiple currencies in real-time
- Swap currencies with a single click
- Responsive and modern UI with background image and blur effect
- Built with custom React hooks for fetching currency rates

## API Used

- [ExchangeRate API](https://api.frankfurter.app/)  
  This project fetches real-time currency rates from the [Frankfurter API](https://www.frankfurter.app/).

## How It Works

- Enter the amount and select the source currency ("From").
- Select the target currency ("To").
- Click **Convert** to see the converted amount.
- Use the **swap** button to quickly switch between source and target currencies.

## React Hooks Used

- **useState**  
  Manages state for amount, selected currencies, and conversion result.

- **useCurrency (custom hook)**  
  Fetches and provides currency rates based on the selected source currency.

## Usage

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ujjwal1207/currency-convertor.git
   cd currency-convertor
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
