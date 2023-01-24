export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Текст */
  buttonText?: string;

  /** Контент кнопки в другом формате. */
  children: React.ReactNode;

  /** Пользовательский класс. */
  className: string;

  /** Экшен, который триггерится по клику. */
  onClick: (payload?: any) => void;

  /** Использовать ли дефолтный класс.
   * Если да, кнопка получит и дефолтный класс, и пользовательский (если указан).
   * Значение по умолчанию -- true.
   */
  useDefaultClassName?: boolean;
}
