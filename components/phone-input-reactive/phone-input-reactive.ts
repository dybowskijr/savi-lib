import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'phone-input-reactive',
    templateUrl: 'phone-input-reactive.html',
})

export class PhoneInputReactive implements OnInit{

	@Input() idsuffix;
	@Input() pn;
	public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
	private suffix: string;
	public formGroup: FormGroup;
	@Output() mobileValueChanged = new EventEmitter();
	@Output() mobileValueBlur = new EventEmitter();
	constructor(private formBuilder: FormBuilder) { }
	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			
		})
	}	
	ngAfterViewInit(){
	this.suffix = this.idsuffix;
	}

	inputBlurred(event) {
		this.mobileValueBlur.emit(event);
	}
	
	getPN(){
		if (this.pn && this.pn!='') {
			return "1" + this.pn.replace(/\D+/g, '').slice(0,10);
		}
		return '';
	}

	emitMobileChanged(evt) {
		//console.log("emitting mobile change", this.getPN());
		this.mobileValueChanged.emit(this.getPN());
	}
	
}
