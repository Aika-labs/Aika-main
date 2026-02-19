export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto p-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Humano y Agéntico. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
