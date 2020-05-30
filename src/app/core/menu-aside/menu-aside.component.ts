import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent implements OnInit {

  @ViewChild('menuGroup') menuGroup: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public openMenu(): void {
    this.renderer.setStyle(this.menuGroup.nativeElement, 'transform', 'none');
  }

  public closeMenu(): void {
    this.renderer.setStyle(this.menuGroup.nativeElement, 'transform', 'translate(-100%, 0)');
  }

  public setDefaultMenu() {
    if (document.body.offsetWidth >= 768) return this.openMenu();

    this.closeMenu();
  }
}
