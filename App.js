import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from "./src/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
