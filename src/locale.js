export const defaultLocale = 'en';

export default {
    pl: {
        logIn: 'Zaloguj się',
        signUp: 'Zarejestruj się',
        deleteConfirmation: 'Jesteś pewny?',
        actionCannotBeUndone: 'Ta akcja nie może zostać cofnięta',
        notFound: 'Nie znaleziono',
        edited: 'Edytowano',
        active: 'Aktywne',
        'timer.seconds': `{value, plural, 
            one { Sekunda } 
            few { Sekundy } 
            many { Sekund }
        }`,
        'timer.minutes': `{value, plural, 
            one { Minuta } 
            few { Minuty } 
            many { Minut }
        }`,
        'timer.hours': `{value, plural, 
            one { Godzina } 
            few { Godziny } 
            many { Godzin }
        }`,
        'timer.days': `{value, plural, 
            one { Dzień } 
            few { Dni } 
            many { Dni }
        }`,
        'timer.seconds.medium': ` Sek. `,
        'timer.minutes.medium': ` Min. `,
        'timer.hours.medium': ` Godz. `,
        'timer.days.medium': ` D. `,
        'main.jumbotron.first': 'Zmierz swoje codzienne zadania',
        'main.jumbotron.second': 'i planuj swój dzień lepiej!',
        'main.jumbotron.button': 'Spróbuj za darmo już teraz',
        'input.email': 'Email',
        'input.name': 'Nazwa',
        'input.search': 'Szukaj',
        'input.description': 'Opis',
        'input.color': 'Kolor',
        'input.newEmail': 'Nowy email',
        'input.password': 'Hasło',
        'input.passwordConfirmation': 'Potwierdź hasło',
        'input.oldPassword': 'Stare hasło',
        'input.newPassword': 'Nowe hasło',
        'input.confirmNewPassword': 'Potwierdź nowe hasło',
        'input.theme.light': 'Jasny',
        'input.theme.dark': 'Ciemny',
        'input.locale.pl': 'Polski - polski',
        'input.locale.en': 'Angielski - english',
        'input.timePreference.long': 'Długi',
        'input.timePreference.medium': 'Średni',
        'input.timePreference.short': 'Krótki',
        'input.datePreference.relative': 'Relatywna',
        'input.datePreference.long': 'Długa',
        'input.datePreference.short': 'Krótka',
        'input.active': 'Aktywne',
        'toast.success.changePassword': 'Pomyślnie zmieniono hasło',
        'toast.success.changeEmail': 'Wiadomość potwierdzająca została wysłana',
        'toast.success.deleteAccount': 'Pomyślnie usunięto konto',
        'toast.success.tag.create': 'Pomyślnie stworzono etykietę',
        'toast.success.tag.update': 'Pomyślnie zaktualizowano etykietę',
        'toast.success.tag.delete': 'Pomyślnie usunięto etykietę',
        'toast.success.tag.tasks.attach': 'Pomyślnie przypisano zadanie',
        'toast.success.tag.tasks.detach': 'Pomyślnie odłączono zadanie',
        'toast.success.task.create': 'Pomyślnie stworzono zadanie',
        'toast.success.task.update': 'Pomyślnie zaktualizowano zadanie',
        'toast.success.task.delete': 'Pomyślnie usunięto zadanie',
        'toast.success.attempt.create': 'Pomyślnie stworzono próbę',
        'toast.success.attempt.update': 'Pomyślnie zaktualizowano próbę',
        'toast.success.attempt.delete': 'Pomyślnie usunięto próbę',
        'toast.success.task.tags.attach': 'Pomyślnie przypisano etykietę',
        'toast.success.task.tags.detach': 'Pomyślnie odłączono etykietę',
        'toast.error.validation': 'Sprawdź błędy i wyślij ponownie',
        'toast.error.notFound': 'Nie znaleziono takiego adresu',
        'toast.error.unauthorized': 'Musisz być zalogowanym',
        'toast.error.forbidden': 'Nie masz uprawnień',
        'toast.error.code': 'Wystąpił nieznany błąd. Spróbuj ponownie lub skontaktuj się z administratorem',
        'toast.error.server': 'Wystąpił błąd po stronie serwera. Spróbuj ponownie później',
        'toast.error.client':
            'Wystąpił niezidentyfikowany błąd. Spróbuj ponownie później lub skontaktuj się z administratorem',
        'validation.error.attempt.noTask': 'Zadanie jest wymagane.',
        'action.create': 'Stwórz',
        'action.timer': 'Mierz czas',
        'action.edit': 'Edytuj',
        'action.settings': 'Ustawienia',
        'action.dataEdit': 'Edytuj dane',
        'action.delete': 'Usuń',
        'action.search': 'Szukaj',
        'action.lists': 'Listy',
        'action.logout': 'Wyloguj się',
        'action.attempt.backIndex': 'Wróć do listy prób',
        'action.attempt.create': 'Stwórz próbę',
        'model.user': 'Użytkownik',
        'model.task.singular': 'Zadanie',
        'model.task.plural': 'Zadania',
        'model.task.pluralCounter': `{tasks, plural, 
            =0 {Brak zadań} 
            one {{tasks} zadanie} 
            few {{tasks} zadania} 
            many {{tasks} zadań}
        }`,
        'model.tag.singular': 'Etykieta',
        'model.tag.plural': 'Etykiety',
        'model.attempt.singular': 'Próba',
        'model.attempt.plural': 'Próby',
        'attempt.index.header.description': 'Opis',
        'attempt.index.header.time': 'Czas',
        'attempt.index.header.lastUpdated': 'Zaktualizowano',
        'attempt.index.header.taskName': 'Nazwa zadania',
        'task.index.header.name': 'Nazwa',
        'task.index.header.description': 'Opis',
        'task.index.header.average': 'Średni',
        'task.index.header.fastest': 'Najszybszy',
        'task.index.header.slowest': 'Najwolniejszy',
        'task.index.header.lastUpdated': 'Zaktualizowano',
        'tag.index.header.name': 'Nazwa',
        'tag.index.header.description': 'Opis',
        'tag.index.header.color': 'Kolor',
        'tag.index.header.taskCount': 'Liczba zadań',
        'tag.create.title': 'Stwórz etykietę',
        'tag.edit.title': 'Edytuj etykietę',
        'tag.form.text1': 'Etykiety są świetnym sposobem na połączenie w grupę podobnych zadań',
        'tag.form.text2':
            'Najważniejszym elementem każdej etykiety jest kolor. Wybierz dobry kolor, ponieważ to on będzie identyfikował zadania w różnych miejscach.',
        'tag.delete.title': 'Usuń etykietę',
        'tag.assign.title': 'Przypisz zadania',
        'tag.assign.text': 'Jedna etykieta może być przypisana do wielu zadań',
        'task.create.title': 'Stwórz zadanie',
        'task.edit.title': 'Edytuj zadanie',
        'task.form.text1': 'Zadania są podstawowymi elementami pomiaru',
        'task.form.text2': 'Pokażą ci kilka statystyk jak wiele czasu na nie poświęcasz',
        'task.delete.title': 'Usuń zadanie',
        'task.assign.title': 'Przypisz etykiety',
        'task.assign.text': 'Zadanie może mieć wiele etykiet',
        'attempt.create.title': 'Stwórz próbę',
        'attempt.edit.title': 'Edytuj próbę',
        'attempt.form.text1': 'Próby odzblablabla',
        'attempt.delete.title': 'Usuń próbę',
        'user.settings.theme.title': 'Zmień motyw',
        'user.settings.locale.title': 'Zmień język',
        'user.settings.timePreference.title': 'Wybierz preferowany format czasu',
        'user.settings.timePreference.text1':
            'W miejscach takich jak listy, długi i uśredniony format będzie odcinał dane bez znaczenia - np. 3 dni 22 godziny',
        'user.settings.datePreference.title': 'Wybierz preferowany format daty',
        'user.settings.datePreference.text1': 'Po najechaniu kursorem na datę zawsze wyświetli się format długi',
        'user.delete.title': 'Usuń konto',
        'user.delete.text2': 'Stracisz wszystkie swoje dane oraz postępy',
        'user.data.password.title': 'Zmień hasło',
        'user.data.password.text1': 'Hasło musi mieć minimum 8 znaków',
        'user.data.email.title': 'Zmień email',
        'user.data.email.text1': 'Wprowadź nowy adres email',
        'user.data.email.text2': 'Będziesz musiał potwierdzić tę akcję',
        'placeholder.title': 'Pellentesque tortor',
        'placeholder.shortText':
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare mattis pellentesque.',
    },
    en: {
        logIn: 'Log In',
        signUp: 'Sign Up',
        deleteConfirmation: 'Are you sure?',
        actionCannotBeUndone: 'This action cannot be undone',
        notFound: 'Not found',
        edited: 'Edited',
        active: 'Active',
        'timer.seconds': `{value, plural, 
            one { second } 
            other { seconds } 
        }`,
        'timer.minutes': `{value, plural, 
            one { minute } 
            other { minutes } 
        }`,
        'timer.hours': `{value, plural, 
            one { hour } 
            other { hours } 
        }`,
        'timer.days': `{value, plural, 
            one { day } 
            other { days } 
        }`,
        'timer.seconds.medium': `Sec `,
        'timer.minutes.medium': `Min `,
        'timer.hours.medium': `H `,
        'timer.days.medium': `D `,
        'main.jumbotron.first': 'Measure your everyday tasks',
        'main.jumbotron.second': 'and plan your day even better!',
        'main.jumbotron.button': 'Try now for free',
        'input.email': 'Email',
        'input.name': 'Name',
        'input.search': 'Search',
        'input.description': 'Description',
        'input.color': 'Color',
        'input.newEmail': 'New email',
        'input.password': 'Password',
        'input.passwordConfirmation': 'Confirm password',
        'input.oldPassword': 'Old password',
        'input.newPassword': 'New password',
        'input.confirmNewPassword': 'Confirm new password',
        'input.theme.light': 'Light',
        'input.theme.dark': 'Dark',
        'input.locale.pl': 'Polish - polski',
        'input.locale.en': 'English - english',
        'input.timePreference.long': 'Long',
        'input.timePreference.medium': 'Medium',
        'input.timePreference.short': 'Short',
        'input.datePreference.relative': 'Relative',
        'input.datePreference.long': 'Long',
        'input.datePreference.short': 'Short',
        'input.active': 'Active',
        'toast.success.changePassword': 'Password changed successfully',
        'toast.success.changeEmail': 'Confirmation email has been sent',
        'toast.success.deleteAccount': 'Account deleted successfully',
        'toast.success.tag.create': 'Tag created successfully',
        'toast.success.tag.update': 'Tag updated successfully',
        'toast.success.tag.delete': 'Tag deleted successfully',
        'toast.success.tag.tasks.attach': 'Task attached successfully',
        'toast.success.tag.tasks.detach': 'Task detached successfully',
        'toast.success.task.create': 'Task created successfully',
        'toast.success.task.update': 'Task updated successfully',
        'toast.success.task.delete': 'Task deleted successfully',
        'toast.success.attempt.create': 'Attempt created successfully',
        'toast.success.attempt.update': 'Attempt updated successfully',
        'toast.success.attempt.delete': 'Attempt deleted successfully',
        'toast.success.task.tags.attach': 'Tag attached successfully',
        'toast.success.task.tags.detach': 'Tag detached successfully',
        'toast.error.validation': 'Check errors and try again',
        'toast.error.notFound': 'Address not found',
        'toast.error.unauthorized': 'You have to log in',
        'toast.error.forbidden': "You don't have permission",
        'toast.error.code': 'An unknown error occurred. Try again or contact the administrator',
        'toast.error.server': 'Server error occurred. Try again later',
        'toast.error.client': 'Undefined error occurred. Try again or contact the administrator',
        'validation.error.attempt.noTask': 'Task is required.',
        'action.create': 'Create',
        'action.edit': 'Edit',
        'action.timer': 'Timer',
        'action.settings': 'Settings',
        'action.dataEdit': 'Edit data',
        'action.delete': 'Delete',
        'action.search': 'Search',
        'action.lists': 'Lists',
        'action.logout': 'Log out',
        'action.attempt.backIndex': 'Back to attempts list',
        'action.attempt.create': 'Create attempt',
        'model.user': 'User',
        'model.task.singular': 'Task',
        'model.task.plural': 'Tasks',
        'model.task.pluralCounter': `{tasks, plural, 
            =0 {No tasks} 
            one {{tasks} task} 
            other {{tasks} tasks} 
        }`,
        'model.tag.singular': 'Tag',
        'model.tag.plural': 'Tags',
        'model.attempt.singular': 'Attempt',
        'model.attempt.plural': 'Attempts',
        'attempt.index.header.description': 'Description',
        'attempt.index.header.time': 'Time',
        'attempt.index.header.lastUpdated': 'Last updated',
        'attempt.index.header.taskName': 'Task name',
        'task.index.header.name': 'Name',
        'task.index.header.description': 'Description',
        'task.index.header.average': 'Average',
        'task.index.header.fastest': 'Fastest',
        'task.index.header.slowest': 'Slowest',
        'task.index.header.lastUpdated': 'Last updated',
        'tag.index.header.name': 'Name',
        'tag.index.header.description': 'Description',
        'tag.index.header.color': 'Color',
        'tag.index.header.taskCount': 'Tasks',
        'tag.create.title': 'Create a tag',
        'tag.edit.title': 'Edit a tag',
        'tag.form.text1': 'Tags are great way to organise similar tasks',
        'tag.form.text2':
            'The most important element of tag is color. You should choose unique ones because you will recognize your tag with it',
        'tag.delete.title': 'Delete a tag',
        'tag.assign.title': 'Assign tasks',
        'tag.assign.text': 'One tag can have many tags',
        'task.create.title': 'Create a task',
        'task.edit.title': 'Edit a task',
        'task.form.text1': 'Tasks are basic measurement unit',
        'task.form.text2': 'They will show few statistics how much time you spend on it',
        'task.delete.title': 'Delete a task',
        'task.assign.title': 'Assign tags',
        'task.assign.text': 'One task can have many tags',
        'attempt.create.title': 'Create an attempt',
        'attempt.edit.title': 'Edit an attempt',
        'attempt.form.text1': 'Attempts are isolated tries of your task',
        'attempt.delete.title': 'Delete an attempt',
        'user.settings.theme.title': 'Change theme',
        'user.settings.locale.title': 'Change language',
        'user.settings.timePreference.title': 'Choose preferred time format',
        'user.settings.timePreference.text1':
            'In places such as lists, long and average format will cut off insignificant data - np. 3 days 22 hours',
        'user.settings.datePreference.title': 'Choose preferred date format',
        'user.settings.datePreference.text1': 'When you hover date with cursor, long date is displayed',
        'user.delete.title': 'Delete account',
        'user.delete.text2': "You'll lose your data and progress",
        'user.data.password.title': 'Change password',
        'user.data.password.text1': 'Password has to be at least 8 characters',
        'user.data.email.title': 'Change email',
        'user.data.email.text1': 'Enter new e-mail address',
        'user.data.email.text2': 'You have to confirm this action',
        'placeholder.title': 'Pellentesque tortor',
        'placeholder.shortText':
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare mattis pellentesque.',
    },
};
