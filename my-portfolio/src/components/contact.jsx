import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 2rem",
        background:
          "linear-gradient(180deg, #fff7ee 0%, #f2dfcf 100%)",
        minHeight: "70vh",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#2b211c",
            fontWeight: "700",
          }}
        >
          Get In Touch
        </h2>
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#964c3a",
            margin: "0 auto 1rem",
            borderRadius: "2px",
          }}
        />
        <p
          style={{
            textAlign: "center",
            color: "#6b564b",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          Have a project in mind or want to collaborate? Let's talk.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <ContactLink href="mailto:hemalathaganesan08@gmail.com" label="Email Me" background="#964c3a" />
          <ContactLink href="https://github.com" label="GitHub" background="#2f231e" />
          <ContactLink href="https://linkedin.com" label="LinkedIn" background="#d29a2e" />
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "20px",
            boxShadow: "0 12px 28px rgba(47,35,30,0.08)",
            border: "1px solid #ead7c4",
          }}
        >
          <InputField
            label="Name"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
          />
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
          />
          <TextAreaField
            label="Message"
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              background: submitted
                ? "#8a5a44"
                : "linear-gradient(90deg, #964c3a, #2f231e)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "1.05rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "opacity 0.3s",
            }}
          >
            {submitted ? "Message Sent" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactLink({ href, label, background }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem 1.5rem",
        backgroundColor: background,
        color: "white",
        textDecoration: "none",
        borderRadius: "999px",
        transition: "transform 0.3s",
        fontWeight: "600",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {label}
    </a>
  );
}

function InputField({ label, type = "text", value, onChange }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        style={{
          display: "block",
          marginBottom: "0.5rem",
          color: "#5b463d",
          fontWeight: "600",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={fieldStyle}
        onFocus={(e) => {
          e.target.style.borderColor = "#964c3a";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#dec7b3";
        }}
        required
      />
    </div>
  );
}

function TextAreaField({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        style={{
          display: "block",
          marginBottom: "0.5rem",
          color: "#5b463d",
          fontWeight: "600",
        }}
      >
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        style={{ ...fieldStyle, resize: "vertical", fontFamily: "inherit" }}
        onFocus={(e) => {
          e.target.style.borderColor = "#964c3a";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#dec7b3";
        }}
        required
      />
    </div>
  );
}

const fieldStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  border: "2px solid #dec7b3",
  borderRadius: "12px",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.3s",
  boxSizing: "border-box",
  backgroundColor: "#fffaf5",
};

export default Contact;
