import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitform:FormGroup;
  variabletracking:'';
  constructor(private formBuilder:FormBuilder) { 
    /*this.submitform = formBuilder.group({
       emailAddressField: new FormControl(),
       quantityField: new FormControl(),
       termsField: new FormControl(),
    });
   */
    this.submitform = formBuilder.group({
      emailAddressField: ['',[Validators.minLength(5),
                             Validators.required,
                             Validators.email]],
      quantityField: ['',Validators.required],
      termsField:['',Validators.requiredTrue],
      /*item : this.formBuilder.array([
        new FormControl('Angular'),
        new FormControl('React'),
      ])*/
        item : this.formBuilder.array([
        this.formBuilder.group({
          itemId:['1'],
          itemName:['Sourabh'],
          itemDesc:['Tutorails'],
          itemDone:['',Validators.requiredTrue]
        })
      ])

   });
  }

  ngOnInit(){
    this.submitform.get('item').setValue({
      itemId:['1'],
      itemName:['learning'],
      itemDesc:['Angular 9'],
      itemDone:['',Validators.requiredTrue]
    })
    console.log(this.submitform.get('item').value.length);
    const itemval = this.submitform.get('item').value;
    console.log(itemval[0].itemName)

    this.submitform.get('emailAddressField').valueChanges.subscribe(data =>{
      this.variabletracking = data;
    })
    this.submitform.get('emailAddressField').statusChanges.subscribe(data =>{
      console.log(data);
    })

   /*this.submitform.setValue({
      emailAddressField:'sourabhs30@gmail.com',
      quantityField:50,
      termsField:true,
})
    this.submitform.patchValue({
      emailAddressField:'sourabhs30@gmail.com',
      quantityField:50
  });*/
}
  
  postSubmit(){
    console.log( this.submitform);
    console.log( this.submitform.value.emailAddressField);
    console.log( this.submitform.value.quantityField);
    console.log( this.submitform.value.termsField);
    this.restForm();
   
  }
  restForm(){
    this.submitform.reset();
  }

  get item(){
   return this.submitform.get('item') as FormArray;
  }

  addNewItem(){
    const itemLength = this.item.length;
    const newItem =this.formBuilder.group({
      itemId:[itemLength + 1],
      itemName:[''],
      itemDesc:[''],
      itemDone:['',Validators.requiredTrue]
    });
    this.item.push(newItem);
  }
  removeItem(itemId){
     this.item.removeAt(itemId);
  }
}
