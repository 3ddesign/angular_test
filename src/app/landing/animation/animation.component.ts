import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(300)),
    ]),
      trigger('wildState', [
        state('normal', style({
          'background-color': 'red',
          transform: 'translateX(0)'
        })),
        state('highlighted', style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)'
        })),
        state('shrunken', style({
          'background-color': 'green',
          transform: 'translateX(0px) scale(0.5)'
        })),
        transition('normal => highlighted', animate(300)),
        transition('highlighted => normal', animate(800)),
        transition('shrunken <=> *', [
          style({
            'background-color': 'orange'
          }),
          animate(1000, style({
            'border-radius': '50px'
          })),
          animate(500)
        ])
      ]),
    trigger('list1', [
      state('normal', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('deleted', style({
        opacity: 0,
        transform: 'translateX(-100px)'
      })),
      transition('normal => deleted', animate(800)),
    ]),
    ]
})

export class AnimationComponent {
  public state: any = 'normal';
  public wildState: any = 'normal';
  public list1: any = 'normal';

  public onAnimate(): any {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  public onShrink(): any {
    this.wildState = 'shrunken';
  }

  public onDelete(event: any): any {
    event.target.remove();
    this.list1 = 'deleted';
  }

  public onStartAnimation(): any {
    console.log('onStartAnimation');
  }

  public onEndAnimation(): any {
    console.log('onEndAnimation');
  }
}
