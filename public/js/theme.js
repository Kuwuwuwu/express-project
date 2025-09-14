document.getElementById("theme-toggle").addEventListener("click", () => {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "/theme";
  const input = document.createElement("input");
  input.name = "theme";
  input.value = document.body.dataset.theme === "light" ? "dark" : "light";
  form.append(input);
  document.body.append(form);
  form.submit();
});