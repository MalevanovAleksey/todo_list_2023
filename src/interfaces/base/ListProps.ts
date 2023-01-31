export interface ListProps {
  items: {
    text: string;
    icon: any;
  }[];
  listTitle: string;
  /** Использовать ли дефолтный класс.
   * Если да, кнопка получит и дефолтный класс, и пользовательский (если указан).
   * Значение по умолчанию -- true.
   */
  useDefaultClassName?: boolean;
  /** Пользовательский класс. */
  className?: string;

  icon?: any[];

  // Отобржать ли у элемента списка иконку активности, по дефолту false
  activityIcon?: boolean;
}
