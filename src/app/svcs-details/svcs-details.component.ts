import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-svcs-details',
  templateUrl: './svcs-details.component.html',
  styleUrls: ['./svcs-details.component.css']
})
export class SvcsDetailsComponent implements OnInit {
  serviceId: any;
  carServices = [
    {
      id: 1,
      title: 'Oil Change',
      description: 'Change the oil and oil filter in your car.',
      icon: 'fa fa-2x fa-taxi'
    },
    {
      id: 2,
      title: 'Tire Rotation',
      description: 'Rotate the tires on your car to ensure even wear.',
      icon: 'fa fa-2x fa-money-check-alt '
    },
    {
      id: 3,
      title: 'Brake Inspection',
      description: 'Inspect the brakes on your car .',
      icon: 'fa fa-2x fa-car '
    },
    {
      id: 4,
      title: 'Transmission Flush',
      description: 'Flush the transmission fluid in your car to help extend the life of the transmission.',
      icon: 'fa fa-2x fa-cogs'
    },
    {
      id: 5,
      title: 'Engine Tune-Up',
      description: 'Perform routine maintenance on the engine to help improve performance and fuel efficiency.',
      icon: 'fa fa-2x fa-spray-can '
    },
    {
      id: 6,
      title: 'Windshield Replacement',
      description: 'Replace the windshield wipers on your car to ensure clear visibility in inclement weather.',
      icon: 'fa fa-2x fa-pump-soap'
    }
  ];



  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
  
  }

}