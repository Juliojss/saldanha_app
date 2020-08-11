import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent implements OnInit {

  @ViewChild('menuGroup') menuGroup: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  get isMobile() {
    return document.body.offsetWidth < 768;
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (this.isMobile && event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  public openMenu(): void {
    this.renderer.setStyle(this.menuGroup.nativeElement, 'transform', 'none');
  }

  public closeMenu(): void {
    this.renderer.setStyle(this.menuGroup.nativeElement, 'transform', 'translate(-100%, 0)');
  }

  public setDefaultMenu() {
    if (!this.isMobile) return this.openMenu();

    this.closeMenu();
  }
}
