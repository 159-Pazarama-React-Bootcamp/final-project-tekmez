import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Users.js";
export const store = configureStore({ reducer });
