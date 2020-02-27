import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: "At the beach",
      url:
        // tslint:disable-next-line: max-line-length
        "https://images.unsplash.com/photo-1534764641129-f59a6040d2c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the Eifel tower",
      url:
        "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At lighthouse",
      url:
        "https://images.unsplash.com/photo-1486944936280-f152c82ac151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Museum",
      url:
        "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the beach",
      url:
        // tslint:disable-next-line: max-line-length
        "https://images.unsplash.com/photo-1534764641129-f59a6040d2c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the Eifel tower",
      url:
        "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At lighthouse",
      url:
        "https://images.unsplash.com/photo-1486944936280-f152c82ac151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Museum",
      url:
        "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the beach",
      url:
        // tslint:disable-next-line: max-line-length
        "https://images.unsplash.com/photo-1534764641129-f59a6040d2c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the Eifel tower",
      url:
        "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At lighthouse",
      url:
        "https://images.unsplash.com/photo-1486944936280-f152c82ac151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Museum",
      url:
        "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ];
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
