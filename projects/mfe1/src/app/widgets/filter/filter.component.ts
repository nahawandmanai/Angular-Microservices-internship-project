import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  isSmallScreen = false;

  selectedOptionTouteLesCiternes: string='';
  selectedOptionCapacite: string='';
  selectedOptionNature: string='';
  selectedOptionDate: string='';
  selectedOptionSite: string='';
  
  hideLabelTouteLesCiternes = false;
  hideLabelCapacite = false;
  hideLabelNature = false;
  hideLabelDate = false;
  hideLabelSite = false;
  

 // disableSelect = new FormControl(false);
  newFormControl: FormControl;
  disableSelect: FormControl;
  selectedOption: string | null = null;
  


  toggleLabel(label: string) {
    switch (label) {
      case 'Toutes les citernes':
        this.hideLabelTouteLesCiternes = !this.hideLabelTouteLesCiternes;
        break;
      // Add cases for other labels if needed
      default:
        break;
    }
  }

  constructor() {
    this.disableSelect = new FormControl(false);
    this.newFormControl = new FormControl(); }


  ngOnInit(): void {
    this.checkScreenSize();
  }
  
  checkScreenSize(): void {
    const smallScreenBreakpoint = 768;

    // Check the initial screen size
    this.isSmallScreen = window.innerWidth < smallScreenBreakpoint;

    // Listen for window resize events to update the screen size
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth < smallScreenBreakpoint;
    });
  }

}
