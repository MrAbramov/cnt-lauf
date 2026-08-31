const checks = [
  { label: "Netzwerke", value: "online" },
  { label: "Cloud-Sync", value: "aktiv" },
  { label: "Security-Scan", value: "bestanden" },
  { label: "Backup", value: "aktuell" },
];

export default function SystemMonitor() {
  return (
    <div className="monitor-panel">
      <div className="monitor-bar">
        <span className="monitor-dot" aria-hidden="true" />
        <span className="monitor-dot" aria-hidden="true" />
        <span className="monitor-dot lit" aria-hidden="true" />
        <span className="monitor-path mono">system-monitor.sh</span>
      </div>

      <div className="monitor-body">
        <p className="monitor-line mono">
          <span className="prompt">$</span>
          <span className="monitor-typed">systemctl status --all</span>
          <span className="monitor-cursor" aria-hidden="true" />
        </p>

        <ul className="monitor-checks">
          {checks.map((check) => (
            <li key={check.label}>
              <span className="ok">[OK]</span>
              <span>{check.label}</span>
              <span className="fill" aria-hidden="true" />
              <span className="value">{check.value}</span>
            </li>
          ))}
        </ul>

        <div className="monitor-metric">
          <div>
            <span className="metric-num">99,9&nbsp;%</span>
            <span className="metric-label">Uptime · 30 Tage</span>
          </div>
          <svg className="monitor-spark" viewBox="0 0 110 34" fill="none" aria-hidden="true">
            <path
              d="M2,24 L18,20 L34,26 L50,14 L66,18 L82,8 L98,12 L108,6"
              pathLength={100}
            />
            <circle className="monitor-spark-dot" cx="108" cy="6" r="2.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
