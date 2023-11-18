//O(n)
//Loops to make sure both symbols are present
export default function PasswordCheck(password) {
  const regex = new RegExp(
    "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*()-_=+\\[\\]{};:'.,\"\\\\|/?><]).{8,}"
  );

  if (!regex.test(password)) {
    return false;
  } else {
    return true;
  }
}
