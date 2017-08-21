import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';

export class Inquiry {
  name: string;
  website: string;
  subject: string;
  message: string;
  constructor(name: string, website: string, subject: string, message: string) {
    this.name = name;
    this.website = website;
    this.subject = subject;
    this.message = message;
  }
  public reset() {
    this.name = '';
    this.website = '';
    this.subject = '';
    this.message = '';
  }
}

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  reasons = ['Project Idea', 'Consulting for project', 'Blog Topic', 'Tutorial Request','Other'];
  formInquiry = new Inquiry('', '', '', '');
  constructor(private emailComposer: EmailComposer) {}

  public submitForm() {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      let email = {
        to: 'mitaineyves@gmail.com',
        subject: this.formInquiry.subject,
        body: this.generateEmail(this.formInquiry),
        isHtml: true
      };
      this.emailComposer.open(email);
      this.formInquiry.reset();
    });
  }
  generateEmail(inquiry: Inquiry) : string {
    var email = '<b>Name:</b>' + inquiry.name + '<br><br>';
    email += '<b>Website:</b>' + inquiry.website + '<br><br>';
    email += '<b>Message:</b>' + inquiry.message + '<br><br>';
    return email;
  }
}
