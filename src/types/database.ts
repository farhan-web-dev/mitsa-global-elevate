export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          subtitle: string;
          icon_name: string;
          image_url: string;
          description: string;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          subtitle?: string;
          icon_name?: string;
          image_url: string;
          description?: string;
          sort_order?: number;
        };
        Update: {
          id?: string;
          name?: string;
          subtitle?: string;
          icon_name?: string;
          image_url?: string;
          description?: string;
          sort_order?: number;
        };
      };
      products: {
        Row: {
          id: string;
          category_id: string;
          name: string;
          specs: string;
          image_url: string;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          category_id: string;
          name: string;
          specs?: string;
          image_url: string;
          sort_order?: number;
        };
        Update: {
          id?: string;
          category_id?: string;
          name?: string;
          specs?: string;
          image_url?: string;
          sort_order?: number;
        };
      };
    };
  };
}
