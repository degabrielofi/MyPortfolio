export default function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className} style={{ width: '100%', maxWidth: 1060, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(40px, 10vw)', paddingRight: 'max(40px, 10vw)' }}>
      {children}
    </div>
  );
}
