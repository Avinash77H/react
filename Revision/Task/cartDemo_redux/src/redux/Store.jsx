import { createStore } from "redux";
import Reducer from "./Reducer";

const createStrore = createStore;

const Store = createStrore(Reducer);

export default Store;