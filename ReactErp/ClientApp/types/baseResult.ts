export interface baseResult <T> {
    result?: (T)[] | null;
    isSuccess: boolean;
    errors?: null;
    error?: null;
    exception?: null;
  }
 