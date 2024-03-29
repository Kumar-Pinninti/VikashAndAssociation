import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus }  from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  name: string = '';
  to_name: string = 'Kumar Pinninti'
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  sendEmail(): void {
    emailjs.send("service_e0srr5k","template_54iix0g", {
      to_name: this.to_name,
      from_name: this.name,
      from_email: this.email,
      subject: this.subject,
      message: this.message
    }, 'sMRt9LsGW9jWhelcw')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent:', response);
        alert('Email sent successfully!');
        this.clearForm();
      }, (error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
  }

  clearForm(): void {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  // disable the send button until all fields are filled
  isFormValid(): boolean {
    return !!this.name && !!this.email && !!this.subject && !!this.message && this.isValidEmail();
  }


  // Regular expression to validate email format
  isValidEmail(): boolean {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailPattern.test(this.email);
  }
}
