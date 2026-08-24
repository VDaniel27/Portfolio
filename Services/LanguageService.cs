namespace Portfolio.Services;

public class LanguageService
{
    public bool IsEnglish { get; private set; } = false;

    public event Action? OnChange;

    public void Toggle()
    {
        IsEnglish = !IsEnglish;
        OnChange?.Invoke();
    }
}
