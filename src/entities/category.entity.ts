type CategoryProps = {
  _id?: string;
  title: string;
  color: string;
};

export class Category {
  public _id?: string;
  public title: string;
  public color: string;

  constructor({ _id, color, title }: CategoryProps) {
    this._id = _id;
    this.title = title;
    this.color = color.toUpperCase();
  }
}

const shoppingCategory = new Category({
  title: 'title',
  color: '#ff7809',
});
