export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} Created by Akshay Gour | All Rights Reserved</p>
    </footer>
  );
}
