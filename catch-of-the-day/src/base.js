import Rebase from "re-base";
import Firebase from "firebase";
import config from "./firebase-config.js";

const firebaseApp = Firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;
