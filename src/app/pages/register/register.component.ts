import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showModal = false;
  tags: string[] = [];
  registerForm: FormGroup;  

  constructor(private fb: FormBuilder ,private router: Router) {
    
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: [20],
      tags: [''],
      addressType: ['', Validators.required],
      homeAddress1: [''],
      homeAddress2: [''],
      companyAddress1: [''],
      companyAddress2: ['']
    });
  }
  ngOnInit(): void {}
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  onSubmit() {
    if (this.registerForm.valid) {
      // Navigate to the profile component with user data
      this.router.navigate(['/user'], { queryParams: { data: JSON.stringify(this.registerForm.value) } });
      this.closeModal();
    }
  }


  validateImage(event: any) {
    const file = event.target.files[0];
    const img = new Image();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      img.src = reader.result as string;
      img.onload = () => {
        if (img.width === 310 && img.height === 325) {
          console.log('Image size is valid.');
          // Proceed with uploading the image
        } else {
          console.log('Please upload an image with dimensions 310x325 pixels.');
          // Clear the file input
          event.target.value = '';
        }
      };
    };
  }
  
  addTag() {
    const tag = this.registerForm.get('tags')?.value;
    if (tag && !this.tags.includes(tag)) {
      this.tags.push(tag);
      this.registerForm.get('tags')?.setValue('');
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter(t => t !== tag);
  }
}

