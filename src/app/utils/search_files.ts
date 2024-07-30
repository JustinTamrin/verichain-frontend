export function searchfiles(): void {
  if (typeof window !== "undefined") {
    // Ensure this code runs only on the client side
    window.addEventListener("DOMContentLoaded", () => {
      const testString: string = "123456";

      const formElement = document.getElementById(
        "my-form"
      ) as HTMLFormElement | null;
      const noMatchDropdown = document.getElementById("no_match");
      const matchFoundDropdown = document.getElementById("match_found");

      function showDropdown(dropdown: HTMLElement | null): void {
        if (dropdown) dropdown.classList.add("show");
      }

      function hideDropdown(dropdown: HTMLElement | null): void {
        if (dropdown) dropdown.classList.remove("show");
      }

      function dropdownHandler(str: string): void {
        if (str === testString) {
          showDropdown(matchFoundDropdown);
          hideDropdown(noMatchDropdown);
        } else {
          showDropdown(noMatchDropdown);
          hideDropdown(matchFoundDropdown);
        }
      }

      formElement?.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const formEl = event.currentTarget as HTMLFormElement;
        const inputValue = (
          formEl.elements.namedItem("hash-input") as HTMLInputElement
        ).value;

        console.log(inputValue);

        dropdownHandler(inputValue);
      });
    });
  }
}
