const form = document.querySelector("#upscript");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const input = String(formData.get("input") || "").trim();

  if (!input) {
    message.textContent = "Please enter SOMETHING.";
    return;
  }

  // Check syntax without executing the submitted code
  function verify(code) {
    try {
      new Function(code);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  if (!verify(input)) {
    message.textContent = "The JavaScript contains a syntax error.";
    return;
  }

  try {
    const result = JavaScriptObfuscator.obfuscate(input, {
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      stringArray: true,
      stringArrayEncoding: ["base64"],
      rotateStringArray: true
    }).getObfuscatedCode();

    message.textContent = result;
  } catch (error) {
    console.error(error);
    message.textContent = "Obfuscation failed: " + error.message;
  }
});