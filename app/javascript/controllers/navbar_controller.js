import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["mobileMenu", "mobileButton", "menuIcon", "closeIcon", "profileDropdown", "profileButton", "profileMenu"];

  connect() {
    // Ensure initial state
    this.mobileMenuTarget.classList.add("hidden");
    this.profileMenuTarget.classList.add("hidden");
  }

  toggleMobileMenu() {
    const isOpen = !this.mobileMenuTarget.classList.contains("hidden");
    if (isOpen) {
      this.mobileMenuTarget.classList.add("hidden");
      this.menuIconTarget.classList.remove("hidden");
      this.closeIconTarget.classList.add("hidden");
      this.mobileButtonTarget.setAttribute("aria-expanded", "false");
    } else {
      this.mobileMenuTarget.classList.remove("hidden");
      this.menuIconTarget.classList.add("hidden");
      this.closeIconTarget.classList.remove("hidden");
      this.mobileButtonTarget.setAttribute("aria-expanded", "true");
    }
  }

  toggleProfileDropdown() {
    const isOpen = !this.profileMenuTarget.classList.contains("hidden");
    if (isOpen) {
      this.profileMenuTarget.classList.add("hidden");
      this.profileButtonTarget.setAttribute("aria-expanded", "false");
    } else {
      this.profileMenuTarget.classList.remove("hidden");
      this.profileButtonTarget.setAttribute("aria-expanded", "true");
    }
  }

  // Optional: Close dropdown when clicking outside
  closeProfileDropdown(event) {
    if (!this.profileDropdownTarget.contains(event.target) && !this.profileMenuTarget.classList.contains("hidden")) {
      this.profileMenuTarget.classList.add("hidden");
      this.profileButtonTarget.setAttribute("aria-expanded", "false");
    }
  }
}