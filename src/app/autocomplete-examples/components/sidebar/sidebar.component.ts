import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: { label: string; value: any }[] = [
    { label: 'Default', value: 'default' },
    { label: 'Custom Options', value: 'custom-options' },
    { label: 'Multiple', value: 'multiple' },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
